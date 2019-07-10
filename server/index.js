const express = require('express')

const app = express()

app.get('*', (req, res) => {
  res.status(404).send('404 page')
})

app.listen(3000, err => {
  if (err) {
    console.log.err('Error starting app on port', 3000)
  } else {
    console.log('Server listening to port 3000')
  }
})

module.exports = app

