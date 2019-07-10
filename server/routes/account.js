const router = require('express').Router()

router.get('/create', (req, res) => {
  res.status(200).send('creating')
})

router.get('/login', (req, res) => {
  res.status(200).send('logging in')
})

module.exports = router
