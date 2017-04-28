var mongoose = require('mongoose')

var VacationSchema = new mongoose.Schema({
    start_date: {
        type: String,
        default: ''
    },
    end_date: {
        type: String,
        default: ''
    },
    approved: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('VacationSchema', VacationSchema)