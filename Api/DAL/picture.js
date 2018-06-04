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
var tbl_picture=photos.tbl_pictures;

var picture = {
    getAllPicture: function(callback) {
        tbl_picture.findAll().then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    getPictureById: function(id, callback) {
            tbl_picture.findAll({
                where:{listing_id:id}
            }).then(function (value) {
                callback(value);
            }).catch(function (err) {
                callback("Failed to Retrieve")
            });
    },

    addPicture: function(postParameter, callback) {
        const modelCreation = tbl_picture.build({
            listing_id: postParameter.listingId,
            path:postParameter.url,

        });
        modelCreation.save().then(function (status) {
            callback(status);
        }).catch(function (err) {
            callback("Cannot Save your Data Due to Some Issue ");
        });

    },

    deletePicture:function (id,callback) {
        tbl_picture.destroy({
            where: {picture_id:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Deletion Failed");
        });
    },
};

module.exports = picture;