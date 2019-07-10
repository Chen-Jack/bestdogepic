const express = require('express')
const path = require('path')
const app = express()

const accountRoutes = require('./routes/account')
app.use(accountRoutes)
app.use(express.static(path.join(__dirname, './../client/build'))) // React build files

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './../client/build/index.html'))
})

app.get('*', (req, res) => {
  res.status(404).send('404 page')
})

module.exports = app
