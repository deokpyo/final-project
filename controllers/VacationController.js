var Vacation = require('../models/Vacation');
var Employee = require('../models/Employee');

module.exports = {
    // get request
    find: function (params, callback) {
        Vacation.find(params, function (err, vacations) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, vacations)
        })
    },

    // get request with param:id
    findById: function (id, callback) {
        Vacation.findById(id, function (err, vacation) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, vacation)
        })
    },

    // post request
    create: function (params, callback) {
        Vacation.create(params, function (err, vacation) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, vacation)
        })
    },

    // put request
    update: function (id, params, callback) {
        Vacation.findByIdAndUpdate(id, params, {new:true}, function(err, vacation){
            if(err){
                callback(err, null)
                return
            }
            callback(null, vacation)
        })
    },
    
    // del request
    delete: function (id, callback) {
        Vacation.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}