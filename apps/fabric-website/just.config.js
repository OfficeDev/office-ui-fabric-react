const { preset, just } = require('@uifabric/build');
const { task } = just;
const { createInternalFlightConfigTask, createPublicFlightConfigTask } = require('./scripts/createFlightConfig');

option('baseCDNUrl', { default: './dist' });

task('create-internal-flight-config', createInternalFlightConfigTask());

task('create-public-flight-config', createPublicFlightConfigTask());
