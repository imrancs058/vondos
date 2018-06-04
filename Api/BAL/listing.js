var express=require('express');
var app=express();
var router=express.Router();
var listing=require('../DAL/listing');
router.get('/listing/:id?', function(req, res, next) {
    if (req.params.id) {
        listing.getListingById(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });}
    else {
        listing.getAllListing(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});

router.post('/listing/', function(req, res, next) {
    listing.addListing(req.body.data, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(req.body);}
    });
});


router.get('/delete/:id?', function(req, res, next) {
    if (req.params.id) {
        listing.deleteListing(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});


router.post('/update/', function(req, res, next) {
    listing.updateListing(req.body.data, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(req.body); }
    });
});

module.exports = router;