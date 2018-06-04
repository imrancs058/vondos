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
var models = require('sequelize-auto-import')(sequelize, config.dirPath.model);
var tbl_model=models.tbl_models;

// CRUD Array
var model = {
    getAllmodelsbyProjectId: function(id, callback) {
        tbl_model.findAll({
            where:{projectId:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    getModelById: function(id, callback) {
        tbl_model.findById(id).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    addmodel: function(postParameter, callback) {
        const modelCreation = tbl_model.build({
            projectId: postParameter.projectId,
            modelName:postParameter.modelName,
            modelDescription:postParameter.modelDescription,
            modelSqFt: postParameter.modelSqFt,
            modelBeds:postParameter.modelBeds,
            modelBaths:postParameter.modelBaths,
            modelFloors: postParameter.modelFloors,
            modelPrice	:postParameter.modelPrice
        });
        modelCreation.save().then(function (status) {
            callback(status);
        }).catch(function (err) {
            callback("Cannot Save your Data Due to Some Issue ");
        });
    },

    deleteModel:function (id,callback) {
        tbl_model.destroy({
            where: {modelId:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Deletion Failed");
        });
    },

    updateMdel:function (postParameter,callback) {
        tbl_model.findById(postParameter.modelId).then(function (itemInstance) {
            itemInstance.update({
                projectId: postParameter.projectId,
                modelName:postParameter.modelName,
                modelDescription:postParameter.modelDescription,
                modelSqFt: postParameter.modelSqFt,
                modelBeds:postParameter.modelBeds,
                modelBaths:postParameter.modelBaths,
                modelFloors: postParameter.modelFloors,
                modelPrice	:postParameter.modelPrice
            }).then(function (self) {
                callback("Congratulation! Updation Successfully Completed.");
            }).catch(function (err) {
                callback("err");
            });
        }).catch(function (err) {
            callback("Something goes wrong! Updation failed due to some reason.");
        });
    }
};
module.exports = model;