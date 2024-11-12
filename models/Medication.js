const mongoose = require('mongoose')

const medicationSchema = new mongoose.Schema({
    name: String,
    interactions:[String],
    comorbidities: [String],
})

module.exports = mongoose.model('Medication', medicationSchema);