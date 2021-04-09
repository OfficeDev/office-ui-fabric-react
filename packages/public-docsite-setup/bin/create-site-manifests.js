#!/usr/bin/env node

// @ts-check
const fs = require('fs');
const path = require('path');
const { MANIFEST_NAME_FORMAT, MANIFEST_VARIANTS } = require('..');

//
// This script should be run as part of the release build (in each major version branch) to
// generate manifest files for developer.microsoft.com/fluentui. These manifest files contain
// the base URL for loading the site version generated by a particular build.
//

const argv = process.argv.slice(2);
const mainPackagePath = argv[0];
let baseCDNUrl = argv[1];
if (!(mainPackagePath && fs.existsSync(mainPackagePath) && baseCDNUrl && /^http/.test(baseCDNUrl))) {
  console.error(`
Usage: create-site-manifests <mainPackagePath> [baseCDNUrl]

mainPackagePath   path to the folder containing the primary package (@fluentui/react or OUFR)
baseCDNUrl        (optional) CDN URL prefix where this build's files will be uploaded
                    Default: https://fabricweb.azureedge.net/fabric-website/vN/$(Build.BuildNumber)/
                      where "N" in "vN" is the major version number
`);
  process.exit(1);
}

const packageData = JSON.parse(fs.readFileSync(path.join(mainPackagePath, 'package.json'), 'utf-8'));
const version = packageData.version;
const majorVersion = version.match(/^\d+/)[0];

if (!baseCDNUrl) {
  baseCDNUrl = `https://fabricweb.azureedge.net/fabric-website/v${majorVersion}/${process.env.BUILD_BUILDNUMBER}/`;
}

/** @type {import('..').SiteConfig} */
const manifestData = {
  baseCDNUrl,
  libraryVersion: version,
  createdDate: new Date().toString(),
};

console.log('manifest data:');
console.log(manifestData);

const outDir = path.join(process.cwd(), 'site-manifests');
console.log('Writing manifests to', outDir);
try {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
} catch (e) {
  console.error('Error creating output folder', e);
  process.exit(1);
}

// This is an attempt to help keep things in sync between src/loadSite.ts and here
/** @type {keyof import('..').SiteGlobals} */
const siteConfigVar = '__siteConfig';

for (const suffix of MANIFEST_VARIANTS) {
  const manifestPath = path.join(
    outDir,
    MANIFEST_NAME_FORMAT.replace('{major}', majorVersion).replace('{suffix}', suffix),
  );

  try {
    fs.writeFileSync(manifestPath, `var ${siteConfigVar} = ${JSON.stringify(manifestData, null, 2)};`);
    console.log(`Wrote ${manifestPath}`);
  } catch (err) {
    console.error(`Error writing ${manifestPath}: `, err);
    process.exit(1);
  }
}
