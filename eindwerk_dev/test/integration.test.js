/*
const request = require('supertest')
const router = require('../src2/server.js')
const requestapp = request(router);

let UUID;

describe('GET /', () => {
    test('GET should respond with a status code of 200', async () => {
        try {
            const response = await request(router).get('/api/activities');
            expect(response.body).not.toBeNull();
            expect(response.body[0]['uuid']).toBeDefined();
            requestapp.end(function (err, res) {
                if (err) return done(err);
                UUID = res.body.activities[0].UUID;
                return done();
            });
            console.log(response.body[0]['uuid_'])
        } catch (error) {
            console.log(error);
        }
    });

});


describe('DELETE /', () => {
    it('DELETE should respond with a status code of 200', (done) => {
        requestapp
            .delete(`/api/activities/${UUID}`)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body.message).toBe(`activities with ${UUID} deleted`);
                return done();
            });
    });
});

test('POST should repond with a 201 status code', async () => {
    const response = await request(router).post('/api/activities').send({
        date: new Date(),
        activity: "",
        duration: 0,
        description: ""
    })
    expect(response.status).toBe(201)
});

*/