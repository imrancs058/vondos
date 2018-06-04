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
var projects=models.tbl_projects;

// CRUD Array
var Project = {
    getAllProject: function(callback) {
        projects.findAll().then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    getProjectById: function(id, callback) {
        projects.findById(id).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },

    addProject: function(postParameter, callback) {
        const projectCreation = projects.build({
            agentId: postParameter.agentId,
            projectName:postParameter.projectName,
            digitalProperty:postParameter.digitalProperty,
            projectDescription: postParameter.projectDescription,
            projectDeveloper:postParameter.projectDeveloper,
            projectStatus:postParameter.projectStatus,
            projectStartPrice: postParameter.projectStartPrice,
            projectStreetNumber	:postParameter.projectStreetNumber,
            projectStreetName:postParameter.projectStreetName,
            projectCity: postParameter.projectCity,
            projectMainIntersection:postParameter.projectMainIntersection,
            projectLatitude:postParameter.projectLatitude,
            projectLongitude: postParameter.projectLongitude,
            projectTotalBuildings:postParameter.projectTotalBuildings,
            projectTotalStories:postParameter.projectTotalStories,
            projectTotalUnits: postParameter.projectTotalUnits,
            projectSmallestUnit:postParameter.projectSmallestUnit,
            projectLargestUnit:postParameter.projectLargestUnit,
            projectAveragePrice:postParameter.projectAveragePrice,
            projectEstimatedCompletion:postParameter.projectEstimatedCompletion,
            projectURL:postParameter.projectURL,
            isVondos:0
        });
        projectCreation.save().then(function (status) {
            callback(status);
        }).catch(function (err) {
            callback("Cannot Save your Data Due to Some Issue ");
        });
    },

    deleteProject:function (id,callback) {
        projects.destroy({
            where: {projectId:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Deletion Failed");
        });
    },

    updateProject:function (postParameter,callback) {
        projects.findById(postParameter.projectId).then(function (itemInstance) {
            itemInstance.update({
                agentId: postParameter.agentId,
                projectName:postParameter.projectName,
                digitalProperty:postParameter.digitalProperty,
                projectDescription: postParameter.projectDescription,
                projectDeveloper:postParameter.projectDeveloper,
                projectStatus:postParameter.projectStatus,
                projectStartPrice: postParameter.projectStartPrice,
                projectStreetNumber	:postParameter.projectStreetNumber,
                projectStreetName:postParameter.projectStreetName,
                projectCity: postParameter.projectCity,
                projectMainIntersection:postParameter.projectMainIntersection,
                projectLatitude:postParameter.projectLatitude,
                projectLongitude: postParameter.projectLongitude,
                projectTotalBuildings:postParameter.projectTotalBuildings,
                projectTotalStories:postParameter.projectTotalStories,
                projectTotalUnits: postParameter.projectTotalUnits,
                projectSmallestUnit:postParameter.projectSmallestUnit,
                projectLargestUnit:postParameter.projectLargestUnit,
                projectAveragePrice:postParameter.projectAveragePrice,
                projectEstimatedCompletion:postParameter.projectEstimatedCompletion,
                projectURL:postParameter.projectURL,
                isVondos:0
            }).then(function (self) {
                callback("Congratulation! Updation Successfully Completed.");
            }).catch(function (err1) {
                callback("err");

            });
        }).catch(function (err) {
            callback("Something goes wrong! Updation failed due to some reason.");
        });
    }
};

module.exports = Project;