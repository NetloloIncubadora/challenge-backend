let utils = require('./utils');
exports.searchAsks = async (req, res) => {
    let {sort, filter_amount} = utils.getParams(req);
    let json = getJson(filter_amount, 'asks');
    let asks = jsonSort(sort, json);
    res.json({
        asks
    });
};


exports.searchBids = async (req, res) => {
    let {sort, filter_amount} = utils.getParams(req);
    let json = getJson(filter_amount, 'bids');
    let bids = jsonSort(sort, json);

    res.json({
        bids
    });
};


getJson = (filter_amount, type = 'asks') => {
    let json = require('../orderbook')[type];
    if (filter_amount.length > 0) {
        json = json.filter(item => {
            return filter_amount.includes(item[1])
        });
    }
    return json;

};

jsonSort = (type, json) => {
    if (type === "desc") {
        json.sort((item1, item2) => {
            if (item1[0] > item2[0]) return -1;
            if (item1[0] < item2[0]) return 1;
            return 0
        });
    } else {
        json.sort((item1, item2) => {
            if (item1[0] < item2[0]) return -1;
            if (item1[0] > item2[0]) return 1;
            return 0
        })
    }
    return json;
};