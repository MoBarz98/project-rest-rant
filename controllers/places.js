const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/new', (req, res) => {
  res.send('/places')
})

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    img: '/images/restaurant.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      img: '/images/restaurant2.jpg'
  }]
  res.render('places/index', {places})
})
router.get('*', (req, res) => {
  res.render('error404')
})
module.exports = router

