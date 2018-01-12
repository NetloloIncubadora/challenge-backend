'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let amountsSearch = super.utils.SplitParameters(req.params.amounts);

        let sortOption = req.params.sort;

        let bids = super.utils.SearchAmounts(amountsSearch, super.json.orderBook["bids"], sortOption);
        let asks = super.utils.SearchAmounts(amountsSearch, super.json.orderBook["asks"], sortOption);

        let results = {
            asks: asks,
            bids: bids
        };

        res.end(JSON.stringify(results, null, 4));
    }
}

module.exports = OfferController;