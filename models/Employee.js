var mongoose = require('mongoose')
// create schema class
var Schema = mongoose.Schema

var EmployeeSchema = new Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    isEmployer: {
        type: Boolean,
        default: false
    },
    vacation: [{
        type: Schema.Types.ObjectId,
        ref: 'VacationSchema'
    }]
})

module.exports = mongoose.model('EmployeeSchema', EmployeeSchema)