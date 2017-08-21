var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var threadRoutes = require('./routes/blog-routes')
var server = express();
var port = 3000;
var cors = require('cors')



//MIDDLEWARE
server.use(cors())
server.options('*', cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/blogs', threadRoutes)

server.listen(port, () => {
    console.log("STARTING UP SERVER PORT:", port)
})

var dbConnect = require("./config/db/mlab-config");
