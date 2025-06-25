const vehicles = require('../models/Vehicle');

// Display all vehicles
exports.getAllVehicles = (req, res) => {
    res.render('index', { vehicles });
};

// Create new vehicle
exports.createVehicle = (req, res) => {
    const { vehicleName, price, image, desc, brand } = req.body;
    const newVehicle = {
        id: Date.now(),
        vehicleName,
        price,
        image,
        desc,
        brand
    };
    vehicles.push(newVehicle);
    res.redirect('/');
};

// Show edit form
exports.showEditForm = (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = vehicles.find(v => v.id === id);
    res.render('edit', { vehicle });
};

// Update vehicle
exports.updateVehicle = (req, res) => {
    const id = parseInt(req.params.id);
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
        vehicles[index] = { ...vehicles[index], ...req.body };
    }
    res.redirect('/');
};

// Delete vehicle
exports.deleteVehicle = (req, res) => {
    const id = parseInt(req.params.id);
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
        vehicles.splice(index, 1);
    }
    res.redirect('/');
};
