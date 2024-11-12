const express = require('express');
const router = express.Router();
const medicationsController = require('../controllers/medicationsController');

router.post('/search', medicationsController.searchMedication);
router.post('/add', medicationsController.addMedication);
router.get('/interactions', medicationsController.checkInteractions);
router.delete('/id:', medicationsController.deleteMedication)
router.put('/id:', medicationsController.putMedication)

module.exports = router;
