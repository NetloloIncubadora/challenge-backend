'use strict';

let orderBook = require('./orderbook.json');

class OrderBook {
    constructor() {
        return JSON.parse(JSON.stringify(orderBook));
    }
}

module.exports = OrderBook;