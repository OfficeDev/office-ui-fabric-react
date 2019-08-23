// @ts-check

const fs = require('fs');
const path = require('path');
const flamegrill = require('flamegrill');
const scenarioNames = require('../src/scenarioNames');
const { argv } = require('@uifabric/build').just;

// A high number of iterations are needed to get visualization of lower level calls that are infrequently hit by ticks.
// Wiki: https://github.com/OfficeDev/office-ui-fabric-react/wiki/Perf-Testing
const iterationsDefault = 5000;

// TODO:
//  - Results Analysis
//    - If System/Framework is cutting out over half of overall time.. what is consuming the rest? How can that be identified for users?
//      - Is the case for Toggle.. but not SplitButton. Maybe it's normal for "ok" perf components?
//      - Text is not nearly as bad as Toggle with overall lower samples, though, so something in Toggle is more expensive in Framework.
//      - Even so, rationalize the time and what's consuming it, even if it's expected.
//    - Could compare percentage differences rather than absolute to negate variance. (see variance examples)
//      - Would also have to account for new or missing call hierarchies, which will affect overall percentages.
//    - Production vs. Debug Build Results
//      - Differences?
//    - System Calls
//      - Appear in CI but just appear as DLLs locally on Windows
//      - V8 bug?
//    - Ways to demonstrate improvement/regression:
//      - How could perf results of https://github.com/OfficeDev/office-ui-fabric-react/pull/9622 be more succintly seen and summarized?
//        - Some way of differing parts of the call graph that differ, from the root function (in this case filteredAssign)
//      - https://github.com/OfficeDev/office-ui-fabric-react/pull/9516
//      - https://github.com/OfficeDev/office-ui-fabric-react/pull/9548
//      - https://github.com/OfficeDev/office-ui-fabric-react/pull/9580
//      - https://github.com/OfficeDev/office-ui-fabric-react/pull/9432
//    - How will pass/fail be determined?
//      - What role should React measurements play in results?
//    - Tick Processing
//      - Flags: "https://github.com/v8/v8/blob/master/tools/tickprocessor.js"
//      - Use same version of V8 in Puppeteer to process ticks, somehow
//        - If not, need to remove "Testing v8 version different from logging version" from processed logs
//  - Results Presentation
//    - Use debug version of React to make results more readable? (Where time in React is being spent?)
//    - Add links to scenario implementations?
//    - Master trends for scenario results
//  - Perf
//    - Figure out what is causing huge PROCESSED log file size differences between Windows and Mac. (mac perf is pretty bad)
//      - Mac files have many thousands more platform functions defined.
//      - Way to remove? Any benefit to filtering out while streaming output? (Probably still as time consuming.)
//    - Single CPU usage
//      - Both perf testing and log processing seem to only use one CPU.
//      - Ways to scale / parallelize processing? Node limitation?
//      - Is already taking 10 minutes on CI. If users add scenarios it could get out of control.
//    - Options:
//      - Don't test master, just use posted results.
//        - If master has a "bad" variance, this result will be frozen. May be ok since it can happen on PRs too.
//      - Reduce default number iterations
//      - Allow varying iterations by scenario (for "problem" components like DocumentCardTitle)
//        - This may not be good if these components don't "stand out" as much with high samples.
//  - Modularize:
//    - Standard method for scenario implementation. Storybook?
//    - Would require way of delineating scenario execution, if separate logfiles can't be used for each.
//  - Options
//    - Options to run in development mode to see React stack?
//      - If nothing else should document ways that users can do it locally on wiki.
//    - Ways to test changes to packages that doesn't require rebuilding everything to perf-test?
//      - Add notes to wiki regarding requirements for changing other packages under test.
//      - Add webpack serve option with aliasing?
//    - Reference selection (local file, OUFR version, etc?)
//    - Watch mode for flamegraphs.
//      - Would require going back to webserve config mode?
//  - Variance
//    - Characterize variance
//    - Verify results are repeatable and consistent
//      - 1 tab vs. 100 tabs simulateneously
//      - Eliminate or account for variance!
//      - Minimize scenarios.
//  - Further ideas:
//    - Resizing page to determine reflow
//    - React cascading updates on initial component render.
//    - Monomorphic vs. Megamorphic Analysis:
//      - Sean Larkin said that switching from polymorphic to monomorphic was a webpack optimization.
//      - https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
//      - https://dzone.com/articles/impact-of-polymorphism-on-component-based-framewor

// TODO: other args?
// https://github.com/v8/v8/blob/master/src/flags/flag-definitions.h
//  --log-timer-events
//  --log-source-code

// Analysis
//  - Why is BaseComponent warnMutuallyExclusive appearing in flamegraphs?
//    - It appears the CPU is being consumed simply by calling warnMututallyExclusive.
//    - warnMutuallyExlusive impl is neutered but there still perf hit in setting up the args to call it.
//    - The "get" in flamegraphs is caused by "this.className" arg.
//    - makeAllSafe also consumes time just by having any component extend BaseComponent.
//    - Puppeteer.tracing
//      - Similar to using profiler in Chrome, does not show bottom-up analysis well
//      - Seems to break V8 profile logging output.
//        await page.tracing.start({ path: path.join(logPath, testLogFile[0] + '.trace') });
//        await page.goto(testUrl);
//        await page.tracing.stop();

const urlForDeployPath = process.env.BUILD_SOURCEBRANCH
  ? `http://fabricweb.z5.web.core.windows.net/pr-deploy-site/${process.env.BUILD_SOURCEBRANCH}/perf-test`
  : 'file://' + path.resolve(__dirname, '../dist/');

const urlForDeploy = urlForDeployPath + '/index.html';

const urlForMaster = process.env.SYSTEM_PULLREQUEST_TARGETBRANCH
  ? `http://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/${process.env.SYSTEM_PULLREQUEST_TARGETBRANCH}/perf-test/index.html`
  : 'http://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/perf-test/index.html';

const outDir = path.join(__dirname, '../dist');
const tempDir = path.join(__dirname, '../logfiles');

module.exports = async function getPerfRegressions() {
  const iterationsArgv = /** @type {number} */ (argv().iterations);
  const iterationsArg = Number.isInteger(iterationsArgv) && iterationsArgv;
  const iterations = iterationsArg || iterationsDefault;

  const scenariosAvailable = fs
    .readdirSync(path.join(__dirname, '../src/scenarios'))
    .filter(name => name.indexOf('scenarioList') < 0)
    .map(name => path.basename(name, '.tsx'));

  const scenariosArgv = /** @type {string} */ (argv().scenarios);
  const scenariosArg = (scenariosArgv && scenariosArgv.split && scenariosArgv.split(',')) || [];
  scenariosArg.forEach(scenario => {
    if (!scenariosAvailable.includes(scenario)) {
      throw new Error(`Invalid scenario: ${scenario}.`);
    }
  });

  const scenarioList = scenariosArg.length > 0 ? scenariosArg : scenariosAvailable;

  const scenarios = [];
  scenarioList.forEach(scenario => {
    if (!scenariosAvailable.includes(scenario)) {
      throw new Error(`Invalid scenario: ${scenario}.`);
    }
    // These lines can be used to check for consistency.
    // Array.from({ length: 20 }, (entry, index) => {
    scenarios.push({
      // name: scenario + index,
      name: scenario,
      reference: `${urlForMaster}?scenario=${scenario}&iterations=${iterations}`,
      scenario: `${urlForDeploy}?scenario=${scenario}&iterations=${iterations}`
    });
    // });
  });

  console.log(`\nRunning ${iterations} iterations for each of these scenarios: ${scenarioList}\n`);

  if (!fs.existsSync(tempDir)) {
    console.log(`Making temp directory ${tempDir}...`);
    fs.mkdirSync(tempDir);
  }

  const tempContents = fs.readdirSync(tempDir);

  if (tempContents.length > 0) {
    console.log(`Unexpected files already present in ${tempDir}`);
    tempContents.forEach(logFile => {
      const logFilePath = path.join(tempDir, logFile);
      console.log(`Deleting ${logFilePath}`);
      fs.unlinkSync(logFilePath);
    });
  }

  const scenarioConfig = { outDir, tempDir };
  const scenarioResults = await flamegrill.cook(scenarios, scenarioConfig);

  const comment = createTestSummary(scenarioResults);

  // TODO: determine status according to perf numbers
  const status = 'success';

  console.log(`Perf evaluation status: ${status}`);
  console.log(`Writing comment to file:\n${comment}`);

  // Write results to file
  fs.writeFileSync(path.join(outDir, 'perfCounts.html'), comment);

  console.log(`##vso[task.setvariable variable=PerfCommentFilePath;]apps/perf-test/dist/perfCounts.html`);
  console.log(`##vso[task.setvariable variable=PerfCommentStatus;]${status}`);
};

/**
 * Create test summary based on test results.
 */
function createTestSummary(testResults) {
  const result = `Component Perf Analysis:
  <table>
  <tr>
    <th>Scenario</th>
    <th>
      <div>Master Ticks *</div>
      <div><small>
      <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Perf-Testing#why-are-results-listed-in-ticks-instead-of-time-units">Why ticks?</a>
      </small></div>
    </th>
    <th>
    <div>PR Ticks *</div>
      <div><small>
      <a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Perf-Testing#why-are-results-listed-in-ticks-instead-of-time-units">Why ticks?</a>
      </small></div>
    </th>
    <th>Potential Regression</th>
  </tr>`.concat(
    Object.keys(testResults)
      .map(key => {
        const testResult = testResults[key];

        return `<tr>
            <td>${scenarioNames[key] || key}</td>
            ${getCell(testResult.reference)}
            ${getCell(testResult)}
            ${getRegression(testResult)}
           </tr>`;
      })
      .join('\n')
      .concat(`</table>`)
      .concat("* Ticks can occasionally vary by up to 100% and shouldn't be used solely for determining regression.  ")
      .concat('For more information please see the ')
      .concat('<a href="https://github.com/OfficeDev/office-ui-fabric-react/wiki/Perf-Testing">Perf Testing wiki</a>.')
  );

  console.log('result: ' + result);

  return result;
}

function getCell(testResult) {
  const cell = testResult.files
    ? testResult.files.errorFile
      ? `<a href="${urlForDeployPath}/${path.basename(testResult.files.errorFile)}">err</a>`
      : `<a href="${urlForDeployPath}/${path.basename(testResult.files.flamegraphFile)}">${testResult.numTicks}</a>`
    : `n/a`;

  return `<td>${cell}</td>`;
}

function getRegression(testResult) {
  const cell = testResult.isRegression
    ? testResult.files.regressionFile
      ? `<a href="${urlForDeployPath}/${path.basename(testResult.files.regressionFile)}">Yes</a>`
      : ''
    : '';

  return `<td>${cell}</td>`;
}
