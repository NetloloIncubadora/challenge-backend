const app = require('../config/app');
const request = require('supertest')(app);

describe('Bids Search', () => {
    it('listagem bids Genérica', (done) => {
        request.get('/bids')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
    it('listagem bids with sort', (done) => {
        request.get('/bids?sort=asc')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
    it('listagem bids with sort and amount', (done) => {
        request.get('/bids?sort=asc&amount=1,1.1,1.2,1.3,1.4,1.5,2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
});

describe('Asks Search', () => {
    it('listagem Asks Genérica', (done) => {
        request.get('/asks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
    it('listagem asks with sort', (done) => {
        request.get('/asks?sort=asc')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
    it('listagem asks with sort and amount', (done) => {
        request.get('/asks?sort=asc&amount=1,1.1,1.2,1.3,1.4,1.5,2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/ )
            .expect(200, done);
    });
});