'use strict';

let orderBook = require('../json/orderbook.json');

class JsonInit {
    get orderBook() {
        return orderBook;
    }
}

module.exports = JsonInit;