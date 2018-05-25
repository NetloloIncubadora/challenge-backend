'use strict';

const expect = require("chai").expect;
const mocks = require('node-mocks-http');
const offerController = require('../controllers/offerController');

describe("Order Book Api", () => {

    describe("Get Offers", () => {

      it("returns status 200", () => {
        const req = mocks.createRequest();
        const res = mocks.createResponse();
        req.params.amounts = '0.7,0.5';
        req.params.sort = 'asc';
        offerController.search(req, res);
        expect(res.statusCode).to.equal(200);
      });

      it("returns status 400", () => {
        const req = mocks.createRequest();
        const res = mocks.createResponse();
        req.params.amounts = '0.7,0.5';
        req.params.sort = 'ase';
        offerController.search(req, res);
        expect(res.statusCode).to.equal(400);
      });
      
      it("returns status 400", () => {
        const req = mocks.createRequest();
        const res = mocks.createResponse();
        req.params.amounts = 'a,0.5';
        req.params.sort = 'asc';
        offerController.search(req, res);
        expect(res.statusCode).to.equal(400);
      });
    });
  });