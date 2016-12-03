/**
        Creates an Express.js app with a home page rendered by Jade template engine
**/

var path = require('path')
var express = require("express")
var app = express()

app.set('views', path.join(__dirname))
app.set("view engine", 'jade')

app.get("/home", (req, res) => {
    res.render("index", {date: new Date().toDateString()})
})

app.listen(process.argv[2])