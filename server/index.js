const server = require('./server')
server.listen(3000, err => {
  if (err) {
    console.log.err('Error starting app on port', 3000)
  } else {
    console.log('Server listening to port 3000')
  }
})
