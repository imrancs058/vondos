var Sequelize = require('sequelize');
var config = require('../config.js');
//database connection.
var sequelize = new Sequelize(config.liveDb.database, config.liveDb.user, config.liveDb.pass,{ host: config.liveDb.host,
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
var listings=models.tbl_listings;

// CRUD Array
var Listing = {
    getAllListing: function(callback) {

        listings.findAll().then(function (value) {
            //returning the value here
            callback(value);
        }).catch(function (err) {
            callback("Failed to Retrieve")
        });
    },
    getListingById: function(id, callback) {
        listings.findById(id).then(function (value) {
            callback(value);

        }).catch(function (err) {
            callback("Failed to Retrieve")
        });

    },
    addListing: function(postParameter, callback) {
        const listingCreation = listings.build({
            title: postParameter.title,
            mls_id:postParameter.mls_id,
            list_status:postParameter.list_status,
            list_date: postParameter.List_Date,
            open_house:postParameter.open_house,
            open_house_start:postParameter.open_house_start,
            open_house_end: postParameter.open_house_end,
            price	:postParameter.price,
            open_house2:postParameter.open_house2,
            open_house_start2: postParameter.open_house_start2,
            open_house_end2:postParameter.open_house_end2,
            description:postParameter.description,
            class_id: postParameter.class_id,
            bedrooms:postParameter.bedrooms,
            bathrooms:postParameter.bathrooms,
            lot_lenght: postParameter.lot_lenght,
            lot_width:postParameter.lot_width,
            taxes:postParameter.taxes,
            address:postParameter.address,
            city:postParameter.city,
            type_id:postParameter.type_id,
            basement_id:postParameter.basement_id,
            virtual_tour:postParameter.virtual_tour,
            year_built:postParameter.year_built

        });
        listingCreation.save().then(function (status) {
            callback(status);
        }).catch(function (err) {
            callback("Cannot Save your Data Due to Some Issue ");
        });

    },
    deleteListing:function (id,callback) {
        listings.destroy({
            where: {listing_id:id}
        }).then(function (value) {
            callback(value);
        }).catch(function (err) {
            callback("Deletion Failed");
        });
    },
    updateListing:function (postParameter,callback) {
        listings.findById(postParameter.listingId).then(function (itemInstance) {
            itemInstance.update({
                title: postParameter.title,
                mls_id:postParameter.mls_id,
                list_status:postParameter.list_status,
                list_date: postParameter.list_date,
                open_house:postParameter.open_house,
                open_house_start:postParameter.open_house_start,
                open_house_end: postParameter.open_house_end,
                price	:postParameter.price,
                open_house2:postParameter.open_house2,
                open_house_start2: postParameter.open_house_start2,
                open_house_end2:postParameter.open_house_end2,
                description:postParameter.description,
                class_id: postParameter.class_id,
                bedrooms:postParameter.bedrooms,
                bathrooms:postParameter.bathrooms,
                lot_lenght: postParameter.lot_lenght,
                lot_width:postParameter.lot_width,
                taxes:postParameter.taxes,
                address:postParameter.address,
                city:postParameter.city,
                type_id:postParameter.type_id,
                basement_id:postParameter.basement_id,
                virtual_tour:postParameter.virtual_tour,
                year_built:postParameter.year_built
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
module.exports = Listing;