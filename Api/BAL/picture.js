var express=require('express');
var app=express();
var router=express.Router();
var picture=require('../DAL/picture');

router.get('/picture/:id?', function(req, res, next) {
    if (req.params.id) {
        picture.getPictureById(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    } else {
        picture.getAllPicture(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});

router.post('/picture/', function(req, res, next) {
    picture.addPicture(req.body, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


router.get('/delete/:id?', function(req, res, next) {
    if (req.params.id) {
        picture.deletePicture(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});


module.exports = router;