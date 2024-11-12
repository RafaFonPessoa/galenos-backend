const Medication = require('../models/Medication');
const Interaction = require('../models/Interaction');

// Função para buscar medicamentos por nome
exports.searchMedication = async (req, res) => {
    try {
        const { name } = req.body;
        const medications = await Medication.find({ name: new RegExp(name, 'i') }).populate('interactions');
        res.json(medications);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar medicamentos.' });
    }
};

// Função para adicionar um novo medicamento
exports.addMedication = async (req, res) => {
    try {
        const { name, dosage, description, comorbidities } = req.body;
        const newMedication = new Medication({ name, dosage, description, comorbidities });
        await newMedication.save();
        res.status(201).json(newMedication);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar medicamento.' });
    }
};

// Função para verificar interações medicamentosas
exports.checkInteractions = async (req, res) => {
    try {
        const { medications } = req.body; // Lista de IDs dos medicamentos
        const interactions = await Interaction.find({
            $or: [
                { medication1: { $in: medications }, medication2: { $in: medications } },
                { medication2: { $in: medications }, medication1: { $in: medications } }
            ]
        }).populate('medication1 medication2');

        res.json(interactions);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao verificar interações medicamentosas.' });
    }
};

// Função para deletar um medicamento e suas interações
exports.deleteMedication = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Removendo as interações associadas ao medicamento
        await Interaction.deleteMany({
            $or: [{ medication1: id }, { medication2: id }]
        });
        
        // Deletando o medicamento
        const deletedMedication = await Medication.findByIdAndDelete(id);
        
        if (!deletedMedication) {
            return res.status(404).json({ error: 'Medicamento não encontrado.' });
        }
        
        res.json({ message: 'Medicamento deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar medicamento.' });
    }
};

// Função para atualizar os dados de um medicamento
exports.putMedication = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        
        const updatedMedication = await Medication.findByIdAndUpdate(id, updatedData, { new: true });
        
        if (!updatedMedication) {
            return res.status(404).json({ error: 'Medicamento não encontrado.' });
        }
        
        res.json(updatedMedication);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar medicamento.' });
    }
};
