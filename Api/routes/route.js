var express=require('express');
var app=express();
var router=express.Router();


var auth=require('../BAL/auth');
router.use('/signin',auth);

var project=require('../BAL/project');
router.use('/project',project);

var listing=require('../BAL/listing');
router.use('/listing',listing);

var model=require('../BAL/model');
router.use('/model',model);

var photo=require('../BAL/photo');
router.use('/photo',photo);

var picture=require('../BAL/picture');
router.use('/picture',picture);

var listingSelectdata=require('../BAL/listingSelectdata');
router.use('/listingselectdata',listingSelectdata);

module.exports=router;