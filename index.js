// Modules and Globals
const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status('<h1>404 Page </h1>')
})
// Listen for Connections
app.listen( PORT,() => console.log (`listening on port ${PORT}`))