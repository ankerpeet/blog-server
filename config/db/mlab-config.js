var mongoose = require("mongoose");
var connection = mongoose.connection;
mongoose.connect("mongodb://student:student@ds145010.mlab.com:45010/blog-server", {
  server:{socketOptions:{keepAlive:300000, connectTimeoutMS:30000}},
  replset:{socketOptions:{keepAlive:300000, connectTimeoutMS:30000}}
})

connection.on('error',(err)=>{
  console.log("MLAB Error: ", err)
})

connection.once('open', ()=>{
  console.log("CONNECTED to MLAB ")
})

