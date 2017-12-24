const express = require('express');
const app = express();
const port = process.env.port || 3000;
const address = 'http://localhost';
const fs = require('fs');
const offers = __dirname + '/json/orderbook.json';

app.get('/listOffers', function (req, res) {
    fs.readFile(offers, 'utf8', function (err, data) {
        // console.log(data);
        res.end(data);
    });
});


app.get('/amount', function (req, res) {
    fs.readFile(offers, 'utf8', function (err, data) {
        let offers = JSON.parse(data);
        let asks = offers["asks"];
        findAmount(45000.00000000, offers["bids"]).then(v => {
            let bids = v;
            console.log(bids);
            res.end(JSON.stringify(bids));
        });

    });
});

let findAmount = async function (amount, bids) {
    let result = [];
    for (let i = 0, len = bids.length; i < len; i++) {
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