const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('returns a status 200', () => {
        return request(server).get('/').then(res => {
            expect(res.status).toBe(200);
        });
    });
});