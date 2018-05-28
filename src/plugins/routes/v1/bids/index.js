'use strict';

module.exports = {
  register: require('./bids-route'),
  options: {
    prefix: '/v1'
  }
};
