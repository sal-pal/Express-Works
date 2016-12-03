/**
      Creates static middleware that returns index.html file

**/

var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')))

app.listen(process.argv[2])