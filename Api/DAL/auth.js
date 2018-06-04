var Sequelize = require('sequelize');
var config = require('../config.js');
// CRUD Array
var signin = {
    checkCredentials: function(bodyParameters,callback) {
        checkAuthentication(bodyParameters).then(function (success) {
            callback("Success")
        }).catch(function (err) {
            callback("Error");
        });},
};

module.exports = signin;
function checkAuthentication(bodyParameters) {
    return new Promise(function (resolve, reject){
        if(config.admin.username==bodyParameters.username && config.admin.password==bodyParameters.password)
        {resolve("success");}
        else {reject("Error");}
    });
}