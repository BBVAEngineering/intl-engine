'use strict';

const pkg = require('../package');

module.exports = function(environment) {
  const ENV = {
    modulePrefix: pkg.name,
    environment: environment
  }

  return ENV;
};
