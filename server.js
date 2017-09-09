// Require dependencies.
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    PORT = process.env.PORT || 3000

// Requiring project files
const
    mainR = require('./app/routing/htmlRoutes'),
    apiR = require('./app/routing/apiRoutes')

// Set up middleware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api+json" }))
app.use(express.static(__dirname + '/app/public'))

// Routes
app.use('/api', apiR)
app.use('/', mainR)

// Start listening.
app.listen(PORT, () => console.log('App running..') )
