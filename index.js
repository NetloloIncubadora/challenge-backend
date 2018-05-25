'use strict'

const express = require('express');
const app = express();
const logger = require('morgan');
const config = require('./config/config');
const winston = require('./config/winston');
const router = require('./routes/route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  

const server = app.listen(config.port);  

console.log('Your server is running on port ' + config.port + '.');  

app.use(logger('combined', { stream: winston.stream }));

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(router);
 