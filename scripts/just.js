#!/usr/bin/env node

const fs = require('fs');

function just(cmd) {
  const path = require('path');

  let startIndex = process.argv.findIndex(arg => arg.startsWith('-'));
  if (startIndex < 0) {
    startIndex = 2;
  }

  const config = fs.existsSync(path.resolve(process.cwd(), 'just-task.js'))
    ? path.resolve(process.cwd(), 'just-task.js')
    : path.resolve(__dirname, 'just-task.js');

  process.argv = [...process.argv.slice(0, startIndex), ...(cmd ? [cmd] : []), '--config', config, ...process.argv.slice(startIndex)];

  require('just-task/lib/cli.js');
}

exports.just = just;

if (require.main === module) {
  just();
}
