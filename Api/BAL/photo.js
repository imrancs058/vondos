var express=require('express');
var app=express();
var router=express.Router();
var photo=require('../DAL/photo');
router.get('/photo/:id?', function(req, res, next) {

    if (req.query) {
        photo.getPhotoById(req.query, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    } else {
        photo.getAllPhotos(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});
router.post('/photo/', function(req, res, next) {
    photo.addPhoto(req.body, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


router.get('/delete/:id?', function(req, res, next) {
    if (req.params.id) {
        photo.deletePhoto(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});


router.post('/update/', function(req, res, next) {
    photo.updatePhoto(req.body.data, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


module.exports = router;