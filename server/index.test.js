/* globals describe test */
const app = require('./index')
const request = require('supertest')

describe('Basic routing', () => {
  test('Handles 404 Gets', () => {
    request(app)
      .get('/theresnowaythatthisisanactualroute')
      .expect(404)
  })
})
