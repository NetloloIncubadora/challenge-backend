const express = require('express');
const app = express();
const port = process.env.port || 3000;
const address = 'http://localhost';
const fs = require('fs');
const orderBook = __dirname + '/json/orderbook.json';

//amounts = 45000,44200;
app.get('/offer/:amounts/:sort?', function (req, res) {
    fs.readFile(orderBook, 'utf8', function (err, data) {
        let offers = JSON.parse(data);

        let asks = offers["asks"];
        let bids = offers["bids"];

        let amounts = SplitParameters(req.params.amounts);
        let sortOption = req.params.sort;

        bids = FindAmount(amounts, bids);
        // asks = FindAmount(amounts, asks);

        let results = SortResults(bids, sortOption);
        res.end(JSON.stringify(bids));
    });
});

let Comparator = function (a, b) {
    return a[0] > b[0] ? 1 : -1;
};

let SplitParameters = function (values) {
    return values !== undefined ? values.split(',') : values;
};

let SortResults = function (values, sortOption) {
    if (sortOption !== undefined) {
        if (sortOption === 'asc')
            return values.sort(Comparator);
        else
            return values.sort(Comparator).reverse();
    }
    return values;
};
// Should be below the lowest amount or below one of them?
let IsBelowPrice = function (amount, offer) {
    return offer < amount;
}
// Should be below the lowest amount or below one of them?
let IsBelowPrices = function (amounts, offer) {
    let result = false;

    for (let i = 0; i < amounts.length; i++) {
        let amount = amounts[i];
        if (offer < amount) {
            result = true;
            break;
        }
    }

    return result;
}

let FindAmount = function (amounts, offers) {
    let result = [];
    for (let i = 0; i < offers.length; i++) {
        let offer = offers[i][0];
        if (IsBelowPrices)
            result.push(offer);
        // for (let j = 0; j < amounts.length; j++) {
        //     let amount = amounts[j];
        //     if (IsBelowPrice(amount, offer))
        //         result.push(offer);
        //     // if (offer == amount) {
        //     //     result.push(offer);
        //     // }
        // }
    }
    return result;
};

let server = app.listen(port, function () {
    console.log("RESTful API Server started on: " + address + ":" + port);
});