'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.port || 3000;
const address = 'http://localhost';

let Routes = require('./api/init/routes-init.js');
let _routes = new Routes();
_routes.init(app);

let server = app.listen(port, function () {
    console.log("RESTful API Server started on: " + address + ":" + port);
});