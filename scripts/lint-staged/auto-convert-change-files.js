// @ts-check
const { spawnSync } = require('child_process');
const fs = require('fs');

const files = process.argv.slice(2);

const legacyChangeFile = files.find(file => file.includes('common/changes'));

if (legacyChangeFile && fs.existsSync(legacyChangeFile)) {
  console.warn('Legacy change file detected, will auto convert these to the new format.');
  console.warn('Please use "npm run change" to generate change files instead of "rush change"');
  const convertChangeFiles = require('../convert-change-files');
  convertChangeFiles();
  spawnSync('git', ['add', 'change', 'common/changes'], { stdio: 'inherit' });
}
