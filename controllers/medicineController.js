const medicineModel = require('../models/medicineModel');

exports.getMedicines = (req, res) => {
    const medicines = medicineModel.getMedicines();
    res.json(medicines);
};

exports.getMedicineById = (req, res) => {
    const medicine = medicineModel.getMedicineById(parseInt(req.params.id));
    if (!medicine) return res.status(404).send('Medicamento não encontrado.');
    res.json(medicine);
};

exports.addMedicine = (req, res) => {
    const { name, interations } = req.body;
    const newMedicine = { id: medicineModel.getMedicamentos().length + 1, name, interations };
    medicineModel.addMedicamento(newMedicine);
    res.status(201).json(newMedicine);
};
