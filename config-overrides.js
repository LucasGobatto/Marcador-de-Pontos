const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@scripts': 'src/scripts',
    '@pages': 'src/pages',
    '@app': 'src/app'
  })(config)

  return config
};
