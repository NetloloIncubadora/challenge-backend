const express = require('express');
const app = express();
const port = process.env.port || 3000;
const address = 'http://localhost';
const fs = require('fs');
const offers = __dirname + '/json/orderbook.json';

//amounts = 45000,44200;
app.get('/offer/:amounts/:sort?', function (req, res) {
    fs.readFile(offers, 'utf8', function (err, data) {
        let offers = JSON.parse(data);

        let asks = offers["asks"];
        let bids = offers["bids"];

        let amounts = splitParameters(req.params.amounts);
        let sortOption = req.params.sort;

        bids = findAmount(amounts, bids);

        let results = sortResults(bids, sortOption);
        res.end(JSON.stringify(bids));
    });
});

let Comparator = function (a, b) {
    return a[0] > b[0] ? 1 : -1;
};

let splitParameters = function (values) {
    return values !== undefined ? values.split(',') : values;
};

let sortResults = function (values, sortOption) {
    if (sortOption !== undefined) {
        if (sortOption === 'asc')
            return values.sort(Comparator);
        else
            return values.sort(Comparator).reverse();
    }
    return values;
};

let findAmount = function (amounts, bids) {
    let result = [];
    for (let i = 0; i < bids.length; i++) {
        let bid = bids[i][0];
        for (let j = 0; j < amounts.length; j++) {
            let amount = amounts[j];
            if (bid == amount) {
                result.push(bid);
            }
        }
    }
    return result;
};

let server = app.listen(port, function () {
    console.log("RESTful API Server started on: " + address + ":" + port);
});