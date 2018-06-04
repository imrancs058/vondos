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
        timestamps: false,
        primaryKey: true
    }
});

//for model import.
var models = require('sequelize-auto-import')(sequelize, config.dirPath.model);

// CRUD Array
var Listingselectdata = {
    getAllListing_classes: function(callback) {
        sequelize.query("SELECT * FROM `tbl_listing_classes`", { type: sequelize.QueryTypes.SELECT}).then(function (val) {
            callback(val)
        }).catch(function (err) {
            callback(err)
        })
    },

    getAllBasement_types: function(callback) {
        sequelize.query("SELECT * FROM `tbl_basement_types`", { type: sequelize.QueryTypes.SELECT}).then(function (val) {
            callback(val)
        }).catch(function (err) {
            callback(err)
        })
    },

    getAllPropert_types: function(callback) {
        sequelize.query("SELECT * FROM `tbl_property_types`", { type: sequelize.QueryTypes.SELECT}).then(function (val) {
            callback(val)
        }).catch(function (err) {
            callback(err)
        })
    }
};
module.exports = Listingselectdata;