const chalk = require('chalk');
const fs = require('fs').promises;
const path = require('path');
const prettier = require('prettier');
const { findPackageRoot } = require('workspace-tools');

const { formatBytes } = require('../utils/helpers');
const sortComparedReport = require('../utils/sortComparedReport');

/** @typedef {import('../utils/compareResultsInReports').ComparedReportEntry} ComparedReportEntry */
/** @typedef {import('../utils/compareResultsInReports').ComparedReport} ComparedReport */

/**
 * @param {number} value
 *
 * @return {string}
 */
function getDirectionSymbol(value) {
  if (value < 0) {
    return '<img aria-hidden="true" src="https://microsoft.github.io/sizeAuditor-website/images/icons/Decrease.svg" />';
  }

  if (value > 0) {
    return '<img aria-hidden="true" src="https://microsoft.github.io/sizeAuditor-website/images/icons/IncreaseYellow.svg" />';
  }

  return '';
}

/**
 * @param {import('../utils/calculateDiffByMetric').DiffByMetric} diff
 *
 * @return {string}
 */
function formatDelta({ delta }) {
  if (delta === 0) {
    return '';
  }

  return `\`${formatBytes(delta)}\` ${getDirectionSymbol(delta)}`;
}

/**
 * @param {ComparedReport} report
 *
 * @return {{ changedEntries: ComparedReportEntry[], unchangedEntries: ComparedReportEntry[] }}
 */
function partitionReport(report) {
  /** @type {ComparedReportEntry[]} */
  const changedEntries = [];
  /** @type {ComparedReportEntry[]} */
  const unchangedEntries = [];

  report.forEach(reportEntry => {
    if (reportEntry.diff.gzip.delta === 0 || reportEntry.diff.minified.delta === 0) {
      unchangedEntries.push(reportEntry);
    } else {
      changedEntries.push(reportEntry);
    }
  });

  return {
    changedEntries: sortComparedReport(changedEntries),
    unchangedEntries: sortComparedReport(unchangedEntries),
  };
}

/**
 * @param {import('../utils/compareResultsInReports').ComparedReport} result
 * @param {string} commitSHA
 * @param {boolean} quiet
 */
module.exports = async function markdownReporter(result, commitSHA, quiet) {
  const packageRoot = findPackageRoot(__dirname);

  if (!packageRoot) {
    throw new Error(
      [
        'Failed to find a package root (directory that contains "package.json" file)',
        `Lookup start in: ${__dirname}`,
      ].join('\n'),
    );
  }

  const artifactsDir = path.resolve(packageRoot, 'dist');
  const artifactsFilename = path.join(artifactsDir, 'bundle-size.md');

  const report = [];

  report.push('## 📊 Bundle size report');
  report.push('');

  const { changedEntries, unchangedEntries } = partitionReport(result);

  if (changedEntries.length > 0) {
    report.push('| Package & Exports | Baseline (minified/GZIP) | PR    | Change     |');
    report.push('| :---------------- | -----------------------: | ----: | ---------: |');

    changedEntries.forEach(entry => {
      const title = `<samp>${entry.packageName}</samp> <br /> <abbr title='${entry.path}'>${entry.name}</abbr>`;
      const before = entry.diff.empty
        ? [`\`${formatBytes(0)}\``, '<br />', `\`${formatBytes(0)}\``].join('')
        : [
            `\`${formatBytes(entry.minifiedSize + entry.diff.minified.delta)}\``,
            '<br />',
            `\`${formatBytes(entry.gzippedSize + entry.diff.gzip.delta)}\``,
          ].join('');
      const after = [`\`${formatBytes(entry.minifiedSize)}\``, '<br />', `\`${formatBytes(entry.gzippedSize)}\``].join(
        '',
      );
      const difference = entry.diff.empty
        ? '🆕 New entry'
        : [`${formatDelta(entry.diff.minified)}`, '<br />', `${formatDelta(entry.diff.gzip)}`].join('');

      report.push(`| ${title} | ${before} | ${after} | ${difference}|`);
    });

    report.push('');
  }

  if (unchangedEntries.length > 0) {
    report.push('<details>');
    report.push('<summary>Unchanged files</summary>');
    report.push('');

    report.push('| Package & Exports | Size (minified/GZIP) |');
    report.push('| ----------------- | -------------------: |');

    unchangedEntries.forEach(entry => {
      const title = `<samp>${entry.packageName}</samp> <br /> <abbr title='${entry.path}'>${entry.name}</abbr>`;
      const size = [`\`${formatBytes(entry.minifiedSize)}\``, '<br />', `\`${formatBytes(entry.gzippedSize)}\``].join(
        '',
      );

      report.push(`| ${title} | ${size} |`);
    });

    report.push('</details>');
  }

  report.push(
    `<sub>🤖 This report was generated against <a href='https://github.com/microsoft/fluentui/commit/${commitSHA}'>${commitSHA}</a></sub>`,
  );

  await fs.mkdir(artifactsDir, { recursive: true });
  await fs.writeFile(artifactsFilename, prettier.format(report.join('\n'), { parser: 'markdown' }));

  if (!quiet) {
    console.log([chalk.blue('[i]'), `A report file was written to ${artifactsFilename}`].join(' '));
  }
};
