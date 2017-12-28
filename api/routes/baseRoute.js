'use strict';

let ControllersInit = require('../init/controllers-init.js');

class BaseRoute {
    get controllers() {
        return new ControllersInit();
    }
}

module.exports = BaseRoute;