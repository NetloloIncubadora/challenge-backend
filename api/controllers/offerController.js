'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let asks = super.json.orderBook["asks"];
        let bids = super.json.orderBook["bids"];

        let amountsSearch = super.utils.SplitParameters(req.params.amounts);

        let sortOption = req.params.sort;

        bids = super.utils.SearchAmounts(amountsSearch, bids, sortOption);
        asks = super.utils.SearchAmounts(amountsSearch, asks, sortOption);

        let results = {
            asks: asks,
            bids: bids
        };

        res.end(JSON.stringify(results, null, 4));
    }
}

module.exports = OfferController;