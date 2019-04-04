'use strict';

let offerRoute = require('../routes/offerRoutes.js');

class RoutesInit {
    init(app) {
        offerRoute.init(app);
    }
}

module.exports = RoutesInit;