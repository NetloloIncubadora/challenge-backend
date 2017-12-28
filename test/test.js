'use strict';

let assert = require('assert');
let Utils = require('../api/utils/filter-utils.js');

let _utils = new Utils();

describe("Has A Search Higher Than An Offer's Amount", function () {
    it('should return true', function () {
        let search = 8000;
        let offer = 10000;
        let result = true;
        assert.equal(_utils.IsOfferHigherThanSearch(search, offer), result);
    });
});

describe('Calculate Real Offer Value', function () {
    it('should return calculated offer value', function () {
        let price = 67000;
        let amount = 0.10000000;
        let offerPrice = 6700.00;
        assert.equal(_utils.CalculateOffer(price, amount), offerPrice);
    });
});

describe('Calculate Partial Price', function () {
    it('should return calculated offer value', function () {
        let search = 8000;
        let amount = 0.2;
        let result = 40000
        assert.equal(_utils.CalculatePartialPrice(search, amount), result);
    });
});

describe('SortByPrice', function () {
    it('should return values in ascending order', function () {
        let values = [
            [10],
            [1],
            [3],
            [2],
            [6]
        ];
        let sortOption = 'asc';
        let sortedValues = _utils.SortByPrice(values, sortOption);
        assert.equal(sortedValues[0] < sortedValues[1], true);
    });
    it('should return values in descending order', function () {
        let values = [
            [10],
            [12],
            [3],
            [2],
            [6]
        ];
        let sortOption = 'desc';
        let sortedValues = _utils.SortByPrice(values, sortOption);
        assert.equal(sortedValues[0] > sortedValues[1], true);
    });
    it('should return values in the same order', function () {
        let values = [
            [10],
            [12],
            [3],
            [2],
            [6]
        ];
        let sortOption = undefined;
        let sortedValues = _utils.SortByPrice(values, sortOption);
        assert.equal(sortedValues[0] < sortedValues[1], true);
    });
});