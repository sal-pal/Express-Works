/**
        Handle put request by serving hashed version of the id and current date
**/


var express = require("express")
var app = express()
var url = require('url')
var crypto = require('crypto')


app.put('/message/:id', (req, res) => {
    //Get ID from pathname
    const id = req.params.id
    
    //Create hash
    const hash = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
    
    //Send the hashed info
    res.end(hash)
})

app.listen(process.argv[2])