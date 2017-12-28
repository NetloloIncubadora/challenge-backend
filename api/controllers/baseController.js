'use strict';

let JsonInit = require('../init/json-init.js');
let Utils = require('../utils/filter-utils.js');

class BaseController {
    get json() {
        return new JsonInit();
    }

    get utils() {
        return new Utils();
    }
}

module.exports = BaseController;