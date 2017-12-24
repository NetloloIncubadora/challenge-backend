const express = require('express');
const app = express();
const port = process.env.port || 3000;
const address = 'http://localhost';
const fs = require('fs');

let server = app.listen(port, function () {
    console.log("RESTful API Server started on: " + address + ":" + port);
});