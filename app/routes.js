const itemController = require('./ItemController');

module.exports = (app) => {
    app.get('/bids', itemController.searchBids);
    app.get('/asks', itemController.searchAsks);
};