/**
        Creates a server that reads a file, parses it to JSON and outputs the content to the user

**/


var express = require("express")
var app = express()
var fs = require('fs')

app.set("json spaces", 0)

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err
        var json = JSON.parse(data)
        res.send(json)
    })
})

app.listen(process.argv[2])