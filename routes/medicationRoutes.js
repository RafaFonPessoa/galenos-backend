const express = require('express');
const router = express.Router();
const medicationsController = require('../controllers/medicationsController');

router.post('/search', medicationsController.searchMedication);
router.post('/add', medicationsController.addMedication);
router.get('/interactions', medicationsController.checkInteractions);
router.delete('/delete', medicationsController.deleteMedication)
router.put('/update', medicationsController.putMedication)

module.exports = router;
