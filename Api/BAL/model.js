var express=require('express');
var app=express();
var router=express.Router();
var model=require('../DAL/model');
router.get('/model/:id?', function(req, res, next) {

    if (req.params.id) {
        model.getModelById(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    } else {
        model.getAllmodels(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});

router.get('/projectModels/:Id?', function(req, res, next) {
    model.getAllmodelsbyProjectId(req.params.Id, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


router.post('/model/', function(req, res, next) {
    model.addmodel(req.body.data, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


router.get('/delete/:id?', function(req, res, next) {
    if (req.params.id) {
        model.deleteModel(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});


router.post('/update/', function(req, res, next) {
    model.updateMdel(req.body.data, function(err, count) {
        if (err) {res.json(err);}
        else {res.json(rows);}
    });
});


module.exports = router;