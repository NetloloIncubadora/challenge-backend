'use strict';

module.exports = {
  register: require('./asks-route'),
  options: {
    prefix: '/v1'
  }
};
