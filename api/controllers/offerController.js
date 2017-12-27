'use strict';

let BaseController = require('./baseController.js');

class OfferController extends BaseController {
    search(req, res) {

        let asks = super.json.orderBook["asks"];
        let bids = super.json.orderBook["bids"];

        let amountsSearch = super.utils.SplitParameters(req.params.amounts);

        let sortOption = req.params.sort;

        bids = super.utils.SortByPrice(bids, sortOption);
        asks = super.utils.SortByPrice(asks, sortOption);

        bids = super.utils.FindOffer(amountsSearch, bids);
        asks = super.utils.FindOffer(amountsSearch, asks);

        let results = {
            results: {
                asks: asks,
                bids: bids
            }
        };

        res.end(JSON.stringify(results));
    }
}

module.exports = OfferController;