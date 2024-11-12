const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dosage: String, // Dosagem do medicamento (opcional)
    description: String, // Descrição breve do medicamento (opcional)
    interactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interaction' }], // Referência ao modelo de interações
    comorbidities: [String], // Condições que podem ter interações com o medicamento
});

module.exports = mongoose.model('Medication', medicationSchema);
