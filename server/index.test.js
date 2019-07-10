/* globals describe test */
const server = require('./server')
const request = require('supertest')

describe('Basic routing', () => {
  test('Handles 404 Gets', done => {
    request(server)
      .get('/theresnowaythatthisisanactualroute')
      .expect(404, done)
  })

  test('Serves React File', done => {
    request(server)
      .get('/')
      .expect(400, done)
  })
})
