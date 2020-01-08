// @ts-check
const fs = require('fs');
const os = require('os');
const path = require('path');
const glob = require('glob');

exports.transformDtsTask = function() {
  const dtsFiles = glob.sync('esm/**/*.d.ts');

  for (let dtsFile of dtsFiles) {
    let content = fs.readFileSync(dtsFile, 'utf-8');

    // Remove ambient get accessors, added in TS > 3.5 and incompatible with earlier versions.
    content = content.replace(/^    get (\w+)\(\)/gm, '    readonly $1');

    const dtsDirname = path.dirname(dtsFile.replace(/\\/g, '/'));
    if (dtsDirname.endsWith('/language/typescript') && content.includes(' monaco.')) {
      // Add imports for ambient monaco references in typescript language contribution
      content = "import * as monaco from '../../editor/editor.api';" + os.EOL + content;
    }

    fs.writeFileSync(dtsFile, content);
  }
};
