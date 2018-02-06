const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.type('application/json');
    next();
});

require('../app/routes')(app);

module.exports = app;