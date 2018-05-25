'use strict';

const OfferService = require('../services/offerService');
const expect = require("chai").expect;
const OrderBook = require('../fixture/offer');

describe("sort lists", () => {

    it("should sort offer by asc", () => {
        const offerService = new OfferService();
        const list = [
            { calculatedPrice: 4},
            { calculatedPrice: 1},
            { calculatedPrice: 6},
            { calculatedPrice: 2},
            { calculatedPrice: 3}
        ];
        list.sort(offerService.sortAsc);
        expect(list[0].calculatedPrice).to.equal(1);
        expect(list[1].calculatedPrice).to.equal(2);
        expect(list[2].calculatedPrice).to.equal(3);
        expect(list[3].calculatedPrice).to.equal(4);
        expect(list[4].calculatedPrice).to.equal(6);                
    });

    it("should sort offer by desc", () => {
        const offerService = new OfferService();
        const list = [
            { calculatedPrice: 4},
            { calculatedPrice: 1},
            { calculatedPrice: 6},
            { calculatedPrice: 2},
            { calculatedPrice: 3}
        ];
        list.sort(offerService.sortDesc);
        expect(list[4].calculatedPrice).to.equal(1);
        expect(list[3].calculatedPrice).to.equal(2);
        expect(list[2].calculatedPrice).to.equal(3);
        expect(list[1].calculatedPrice).to.equal(4);
        expect(list[0].calculatedPrice).to.equal(6);                
    });
});

describe("calculate offer", () => {

    it("should calculate price * amount", () => {
        const offerService = new OfferService();
        const calculatedPrice = offerService.calculateOfferPrice([50, 0.3]);
        const result = 15.000
        expect(calculatedPrice).to.equal(result.toFixed(3));
    });
});

describe("find offer", () => {

    it("should find offer by amount", async () => {
        const offerService = new OfferService();
        const amount = ['0.7'];
        const offers = [   
            [
            45300.00000000,
            0.33322053
          ],
          [
            46499.00000000,
            0.70000000
          ],
        ];
        const filteredOffer = await offerService.findByAmount(amount, offers);
        expect(filteredOffer.length).to.equal(1);
    });

    it("should not find offer by amount", async () => {
        const offerService = new OfferService();
        const amount = ['0.7'];
        const offers = [   
            [
            45300.00000000,
            0.33322053
          ],
          [
            46499.00000000,
            0.10000000
          ],
        ];
        const filteredOffer = await offerService.findByAmount(amount, offers);
        expect(filteredOffer.length).to.equal(0);
    });
});

describe("get offers", () => {
    
    it("should get offers from json", () => {
        const offerService = new OfferService();
        const offers = new OrderBook();
        expect(offers.asks.length).to.above(0);
        expect(offers.bids.length).to.above(0);
    });
});