const express = require('express');
const app = express();
const port = process.env.port || 3000;
const address = 'http://localhost';
const fs = require('fs');
const offers = __dirname + '/json/orderbook.json';

app.get('/listOffers', function (req, res) {
    fs.readFile(offers, 'utf8', function (err, data) {
        res.end(data);
    });
});

let Comparator = function (a, b) {
    return a[0] > b[0] ? 1 : -1;
};

app.get('/amount', function (req, res) {
    fs.readFile(offers, 'utf8', function (err, data) {
        let offers = JSON.parse(data);
        let asks = offers["asks"].sort(Comparator); // use reverse for Desc sorting
        // let bids = findAmount(45000.00000000, offers["bids"]);
        res.end(JSON.stringify(asks));
    });
});

let findAmount = function (amount, bids) {
    let result = [];
    for (let i = 0; i < bids.length; i++) {
        let bid = bids[i][0];
        if (bid == amount) {
            result.push(bid);
        }
    }
    return result;
};


let server = app.listen(port, function () {
    console.log("RESTful API Server started on: " + address + ":" + port);
});