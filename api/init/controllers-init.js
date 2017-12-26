'use strict';

let OfferController = require('../controllers/offerController.js');

class ControllersInit {
    get offer() {
        return new OfferController();
    }
}

module.exports = ControllersInit;