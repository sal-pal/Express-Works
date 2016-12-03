/**
       Compiles jade file and serves it along with other static files
**/

var express = require("express")
var app = express()
var stylus = require('stylus')

//Using middleware to style the file.
app.use(stylus.middleware(process.argv[3]))

//Serve the precompiled files
app.use(express.static(process.argv[3]))

app.listen(process.argv[2])
