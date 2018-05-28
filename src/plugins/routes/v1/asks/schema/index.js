'use strict';

module.exports = Object.assign(
  {}, 
  {
    priceSchema: require('./price'),
    asksSchema: require('./asks')
  }
);