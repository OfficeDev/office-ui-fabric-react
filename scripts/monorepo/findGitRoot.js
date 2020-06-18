// @ts-check

const fs = require('fs');
const path = require('path');

let cwdForGitRoot;
let gitRoot;

function findGitRoot() {
  if (gitRoot && cwdForGitRoot === process.cwd()) {
    return gitRoot;
  }

  let cwd = process.cwd();

  const root = path.parse(cwd).root;
  let found = false;
  while (!found && cwd !== root) {
    if (fs.existsSync(path.join(cwd, '.git'))) {
      found = true;
      break;
    }

    cwd = path.dirname(cwd);
  }

  gitRoot = cwd;
  cwdForGitRoot = process.cwd();
  return gitRoot;
}

/** @type {typeof import("./index")["findGitRoot"]} */
module.exports = findGitRoot;
