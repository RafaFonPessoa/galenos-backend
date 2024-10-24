const medicines = [];

// Função para obter todos os medicamentos
const getMedicines = () => {
    return medicines;
};

// Função para obter um medicamento por ID
const getMedicineById = (id) => {
    return medicines.find(m => m.id === id);
};

// Função para adicionar um novo medicamento
const addMedicine = (medicine) => {
    medicines.push(medicine);
};

module.exports = {
    getMedicines,
    getMedicineById,
    addMedicine
};
