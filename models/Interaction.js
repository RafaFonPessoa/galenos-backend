const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
    medication1: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication', required: true },
    medication2: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication', required: true },
    severity: { type: String, enum: ['low', 'moderate', 'high'], required: true }, // Nível de gravidade da interação
    description: String, // Descrição dos efeitos da interação
});

module.exports = mongoose.model('Interaction', interactionSchema);
