var express=require('express');
var app=express();
var router=express.Router();
var auth=require('../DAL/auth');

router.post('/', function(req, res, next) {
    if(req.body.username && req.body.password) {
        auth.checkCredentials(req.body, function(count,err) {
            if (err) {res.json(err);}
            else {res.json(req.body); }
        });}
    else {res.json(-1);}
});

module.exports = router;