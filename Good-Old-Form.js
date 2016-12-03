/**
         Creates a route that processes html form input and prints backwards the str value

**/

var bodyparser = require('body-parser')
var path = require('path')
var express = require("express")
var app = express()

app.use('/form', bodyparser.urlencoded({extended: false}))

app.post("/form", (req, res) => {
    var str = req.body.str
    res.end(str.split('').reverse().join(''))
})

app.listen(process.argv[2])
