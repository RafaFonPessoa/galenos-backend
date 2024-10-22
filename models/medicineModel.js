const medicine = [];

// Função para obter todos os medicamentos
const getMedicines = () => {
    return medicines;
};

// Função para obter um medicamento por ID
const getMedicineById = (id) => {
    return medicamentos.find(m => m.id === id);
};

// Função para adicionar um novo medicamento
const addMedicine = (medicamento) => {
    medicamentos.push(medicamento);
};

module.exports = {
    getMedicamentos,
    getMedicamentoById,
    addMedicamento
};
