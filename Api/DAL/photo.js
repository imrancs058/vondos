var Sequelize = require('sequelize');

var config = require('../config.js');
//database connection.
var sequelize = new Sequelize(config.liveDb.database, config.liveDb.user, config.liveDb.pass,{ host: config.liveDb.host,
    // data type
    dialect: config.liveDb.dialect,

    pool: {
        max: config.liveDb.pool.max,
        min: config.liveDb.pool.min,
        idle: config.liveDb.pool.idle
    }, define: {
        timestamps: false
    }
});

//for model import.
var photos = require('sequelize-auto-import')(sequelize, config.dirPath.model);
var tbl_photo=photos.tbl_photos;

// CRUD Array
var photo = {
    getAllPhotos: function(callback) {
        tbl_photo.findAll().then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    getPhotoById: function(param, callback) {
        if(param.model!=0) {
            tbl_photo.findAll({
                where:{
                    modelId:param.model
                }
            }).then(function (value) {
                callback(value);
            }).catch(function (err) {
                callback("Failed to Retrieve")
            });
        }
        else {
            tbl_photo.findAll({
                where:{projectId:param.project}
            }).then(function (value) {
                callback(value);
            }).catch(function (err) {
                callback("Failed to Retrieve")
            });
        }
    },

    addPhoto: function(postParameter, callback) {
        const modelCreation = tbl_photo.build({
            projectId: postParameter.projectId,
            modelId:postParameter.modelId,
            agentId:postParameter.agentId,
            fileName: postParameter.url,
            photoDescription:postParameter.photoDescription,
            isCover:postParameter.isCover,
            isLogo: postParameter.isLogo,
            orientation	:postParameter.orientation,
            displayOrder:postParameter.displayOrder,
            photoDate: postParameter.photoDate
        });
        modelCreation.save().then(function (status) {
            callback(status);
        }).catch(function (err) {
            callback("Cannot Save your Data Due to Some Issue ");
        });

    },

    deletePhoto:function (id,callback) {
        tbl_photo.destroy({
            where: {photoId:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Deletion Failed");
        });
    },

    updatePhoto:function (postParameter,callback) {
        tbl_photo.findById(postParameter.editId).then(function (itemInstance) {
            itemInstance.update({
                projectId: postParameter.projectId,
                modelId:postParameter.modelId,
                agentId:postParameter.agentId,
                fileName: postParameter.fileName,
                photoDescription:postParameter.photoDescription,
                isCover:postParameter.isCover,
                isLogo: postParameter.isLogo,
                orientation	:postParameter.orientation,
                displayOrder:postParameter.displayOrder,
                photoDate: postParameter.photoDate
            }).then(function (self) {
                callback("Congratulation! Updation Successfully Completed.");
            });
        }).catch(function (err) {
            callback("Something goes wrong! Updation failed due to some reason.");
        });
    }
};

module.exports = photo;