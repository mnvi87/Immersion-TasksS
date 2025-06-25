const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

router.get('/', controller.getAllVehicles);
router.post('/add', controller.createVehicle);
router.get('/edit/:id', controller.showEditForm);
router.post('/edit/:id', controller.updateVehicle);
router.post('/delete/:id', controller.deleteVehicle);

module.exports = router;
