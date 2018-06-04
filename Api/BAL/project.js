var express=require('express');
var app=express();
var router=express.Router();
var project=require('../DAL/project');

router.get('/project/:id?', function(req, res, next) {
    if (req.params.id) {
        project.getProjectById(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    } else {
        project.getAllProject(function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});

router.post('/project/', function(req, res, next) {
        project.addProject(req.body.data, function(err, count) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
});


router.get('/delete/:id?', function(req, res, next) {
    if (req.params.id) {
        project.deleteProject(req.params.id, function(err, rows) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
    }
});


router.post('/update/', function(req, res, next) {
        project.updateProject(req.body.data, function(err, count) {
            if (err) {res.json(err);}
            else {res.json(rows);}
        });
});


module.exports = router;