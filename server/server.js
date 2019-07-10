const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('failed')
})

app.get('*', (req, res) => {
  res.status(404).send('404 page')
})

module.exports = app
