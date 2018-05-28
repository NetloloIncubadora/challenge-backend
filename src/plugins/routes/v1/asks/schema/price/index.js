'use strict';

module.exports = Object.assign(
  {},
  {
    query: require('./querystring-schema'),
    param: require('./params-schema')
  }
);