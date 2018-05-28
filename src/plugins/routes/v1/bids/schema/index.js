'use strict';

module.exports = Object.assign(
  {}, 
  {
    priceSchema: require('./price'),
    bidsSchema: require('./bids')
  }
);