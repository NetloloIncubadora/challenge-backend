'use strict';

let Utils = require('../utils/filter-utils.js');
let orderBook = __dirname + '/../json/orderbook.json'
let fs = require('fs');

class OfferController extends Utils {
    search(req, res) {
        console.log(orderBook);
        // res.render();
        fs.readFile(orderBook, 'utf8', function (err, data) {
            // // console.log(data);
            res.render(data);
            // console.log(orderBook);
            // let offers = JSON.parse(orderBook);
            // res.render(JSON.stringify(orderBook));

            // let asks = offers["asks"];
            // let bids = offers["bids"];

            // let amounts = SplitParameters(req.params.amounts);
            // let sortOption = req.params.sort;

            // bids = FindAmount(amounts, bids);
            // // asks = FindAmount(amounts, asks);

            // let results = SortResults(bids, sortOption);
            // res.end(JSON.stringify(bids));
        });
    }
}

module.exports = OfferController;