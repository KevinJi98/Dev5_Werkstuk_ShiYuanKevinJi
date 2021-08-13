const request = require('supertest')
const router = require('../src2/server.js')

//Post test, status 201
test('POST should repond with a 201 status code', async () => {
    const response = await request(router).post('/api/activities').send({
        date: new Date(),
        activity: "",
        duration: 0,
        description: ""
    })
    expect(response.status).toBe(201)
})

//get test, status 200
describe('GET /', () => {
    test('GET should respond with a status code of 200', async () => {
        const response = await request(router).get('/api/activities').send()
        expect(response.status).toBe(200)
    })
});