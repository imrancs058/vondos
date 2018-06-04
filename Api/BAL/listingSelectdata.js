var express=require('express');
var app=express();
var router=express.Router();
var listingSelectdata=require('../DAL/listingSelectdata');
router.get('/listingsclasses', function(req, res, next) {
    listingSelectdata.getAllListing_classes(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
});

router.get('/basementtypes', function(req, res, next) {
    listingSelectdata.getAllBasement_types(function(err, rows) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});

router.get('/properttypes', function(req, res, next) {
    listingSelectdata.getAllPropert_types(function(err, rows) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});

module.exports = router;