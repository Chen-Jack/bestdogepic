/* globals describe test expect */
const server = require('./server')
const request = require('supertest')
const fs = require('fs')

test('React build folder should be in the right relative location from server', () => {
  const expectedPath = './../client/build'
  expect(fs.existsSync(expectedPath)).toBeTruthy()
})

describe('Basic routing', () => {
  test('Serves React File', () => {
    request(server)
      .get('/')
      .expect(200)
  })

  test('Handles 404 Gets', done => {
    request(server)
      .get('/theresnowaythatthisisanactualroute')
      .expect(404, done)
  })
})
