const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
    medication1: String,
    medication2: String,
    description: String
});

module.exports = mongoose.model('Interaction', interactionSchema);