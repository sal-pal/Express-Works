/**
        Extracts data from query string and serves it as a JSON object.
**/


var express = require("express")
var app = express()


app.set("json spaces", 0)

app.get('/search', (req, res) => {
    res.send(req.query)
})

app.listen(process.argv[2])