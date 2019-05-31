const path = require('path');
const resources = require('../../scripts/webpack/webpack-resources');

module.exports = resources.createConfig('ssr-tests', false, {
  entry: './test/test.js',

  output: {
    filename: 'ssr-tests.js'
  },

  target: 'node',

  node: {
    fs: 'empty'
  },

  resolve: {
    alias: {
      'office-ui-fabric-react/src': path.join(__dirname, 'node_modules/office-ui-fabric-react/src'),
      'office-ui-fabric-react/lib': path.join(__dirname, 'node_modules/office-ui-fabric-react/lib'),
      'office-ui-fabric-react$': path.join(__dirname, 'node_modules/office-ui-fabric-react/lib'),
      '@uifabric/fabric-website-resources/src': path.join(__dirname, 'node_modules/@uifabric/fabric-website-resources/src'),
      '@uifabric/fabric-website-resources/lib': path.join(__dirname, 'node_modules/@uifabric/fabric-website-resources/lib'),
      '@uifabric/legacy$': path.join(__dirname, 'node_modules/@uifabric/legacy/lib'),
      '@uifabric/legacy/src': path.join(__dirname, 'node_modules/@uifabric/legacy/src'),
      '@uifabric/legacy/lib': path.join(__dirname, 'node_modules/@uifabric/legacy/lib'),
      '@uifabric/styling/lib': path.join(__dirname, '../../packages/styling/lib'),
      'Props.ts.js': 'Props'
    }
  },

  plugins: [
    new resources.webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
