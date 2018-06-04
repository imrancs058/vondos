var express=require('express');
var path=require('path');
var loger=require('morgan');
var cors=require('cors');
var bodyParser = require('body-parser');
var app=express();
app.use(cors());
app.use(loger('dev'));
app.use(bodyParser.json());
var config = require('./config.js');
app.use(bodyParser.urlencoded({
    extended: true
}));
var route=require('./routes/route');
app.use('/vondos/v1/api',route);
module.exports=app;
app.listen(config.server.port,function () {
    console.log("server is listening at "+config.server.port);
});