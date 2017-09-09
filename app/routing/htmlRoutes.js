const
    path = require('path'),
    app = require('express').Router()

// GET route for /survey returns survey.html.
app.get('/survey', (req, res) => res.sendFile(path.join(__dirname + '/../public/survey.html')) )

// USE route returns home.html for any undefined GET routes.
app.use((req, res) => res.sendFile(path.join(__dirname + '/../public/home.html')) )

module.exports = app
