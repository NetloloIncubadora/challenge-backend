const app = require('../config/app');
const request = require('supertest')(app);

describe('Bids Search', () => {
    it('listagem bids', (done) => {
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