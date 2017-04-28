var Employee = require('../models/Employee');

module.exports = {
    // get request
    find: function (params, callback) {
        Employee.find(params, function (err, employees) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, employees)
        })
    },

    findById: function (id, callback) {
        Employee.findById(id, function (err, employee) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, employee)
        })
    },

    findOneAndUpdate: function(id, params, callback){
        Employee.findOneAndUpdate({
            "_id": id
        }, {
            $push: {
                "vacation": params._id
            }
        }, function(err, employee){
            if(err) {
                callback(err, null)
                return
            }
            callback(null, employee)
        })
    },

    // post request
    create: function (params, callback) {
        Employee.create(params, function (err, employee) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, employee)
        })
    },

    // put request
    update: function (id, params, callback) {
        Employee.findByIdAndUpdate(id, params, {new:true}, function(err, employee){
            if(err){
                callback(err, null)
                return
            }
            callback(null, employee)
        })
    },

    delete: function (id, callback) {
        Employee.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}