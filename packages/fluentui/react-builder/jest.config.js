const config = commonConfig({
  name: 'react-builder',
  moduleNameMapper: require('lerna-alias').jest(),
});

module.exports = config;
