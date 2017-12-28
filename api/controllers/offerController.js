'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let asks = super.json.orderBook["asks"];
        let bids = super.json.orderBook["bids"];

        let amountsSearch = super.utils.SplitParameters(req.params.amounts);

        let sortOption = req.params.sort;

        bids = super.utils.FindOffers(amountsSearch, bids);
        asks = super.utils.FindOffers(amountsSearch, asks);

        bids = super.utils.SortByPrice(bids, sortOption);
        asks = super.utils.SortByPrice(asks, sortOption);

        let results = {
            asks: asks,
            bids: bids
        };

        res.end(JSON.stringify(results, null, 4));
    }
}

module.exports = OfferController;