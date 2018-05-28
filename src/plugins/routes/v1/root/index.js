'use strict';

module.exports = {
  register: require('./root-route'),
  options: {
    prefix: '/v1'
  }
};