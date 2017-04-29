var mongoose = require('mongoose')

var VacationSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    start_date: {
        type: String,
        default: ''
    },
    end_date: {
        type: String,
        default: ''
    },
    reason: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'Pending'
    },
})

module.exports = mongoose.model('VacationSchema', VacationSchema)