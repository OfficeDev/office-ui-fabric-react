// @ts-check

const { spawnSync } = require('child_process');
const lernaBin = require.resolve('lerna/cli.js');
const getAllPackageInfo = require('./getAllPackageInfo');

const argv = process.argv.slice(2);

// Display a usage message when there is no projects specified
if (argv.length < 1) {
  console.log(`Usage:

  yarn buildto <packagename1> [<packagename2> ...] [<args>]

This command builds all packages up to and including "packagename1" (and "packagename2" etc).
The package name can be a substring.
If multiple packages match a pattern, they will all be built (along with their dependencies).
`);

  process.exit(0);
}

const restIndex = argv.findIndex(arg => arg.startsWith('--'));
const projects = restIndex === -1 ? argv : argv.slice(0, restIndex);
const rest = restIndex === -1 ? [] : argv.slice(argv[restIndex] === '--' ? restIndex + 1 : restIndex);

// This script matches substrings of the input for one more many projects
const allPackages = getAllPackageInfo();

const foundProjects = /** @type {string[]} */ ([]);

for (const project of projects) {
  if (allPackages[project]) {
    foundProjects.push(project);
  } else {
    const packagesForProject = Object.keys(allPackages).filter(name => name.includes(project));
    if (packagesForProject.length === 0) {
      console.log(`There is no project matching "${project}" in this repo`);
    } else if (packagesForProject.length > 1) {
      console.log(`More than one project matched: "${packagesForProject.join('", "')}"`);
    } else {
      console.log(`Found a matching project named "${packagesForProject[0]}"`);
    }
    foundProjects.push(...packagesForProject);
  }
}

const scopes = [];
foundProjects.forEach(projectName => {
  // --scope limits build to a specified package
  scopes.push('--scope');
  scopes.push(projectName);
});

// --include-filtered-Dependencies makes the build include dependencies
// --stream allows the build to proceed in parallel but still in order
spawnSync(
  process.execPath,
  [lernaBin, 'run', 'build', ...scopes, '--include-filtered-dependencies', '--stream', '--', ...rest],
  {
    stdio: 'inherit',
  },
);
