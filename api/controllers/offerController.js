'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let asks = super.json.orderBook["asks"];
        let bids = super.json.orderBook["bids"];

        let amounts = super.utils.SplitParameters(req.params.amounts);

        let sortOption = req.params.sort;

        bids = super.utils.FindAmount(amounts, bids);
        asks = super.utils.FindAmount(amounts, asks);

        let results = super.utils.SortResults(bids, sortOption);
        res.end(JSON.stringify(bids));
    }
}

module.exports = OfferController;