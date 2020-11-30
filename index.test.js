const { test, expect } = require('@jest/globals');
const request = require('supertest');

const app = require('./src/app');

test('Testing route /', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        if (err) return done(err);
        done();
    })
});

test('Testing route /data', (done) => {
    request(app)
    .get('/data')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).toBe('data');
        done();
    })
})