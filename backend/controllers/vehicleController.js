// controllers/vehicleController.js

const Vehicle = require('../models/vehicle_type');

// Create vehicle
exports.createVehicle = async (req, res, next) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                vehicle
            }
        });
    } catch (err) {
        next(err);
    }
};

// Get all vehicles
exports.getAllVehicles = async (req, res, next) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json({
            status: 'success',
            results: vehicles.length,
            data: {
                vehicles
            }
        });
    } catch (err) {
        next(err);
    }
};

// Get vehicle by ID
exports.getVehicleById = async (req, res, next) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                vehicle
            }
        });
    } catch (err) {
        next(err);
    }
};

// Update vehicle by ID
exports.updateVehicle = async (req, res, next) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                vehicle
            }
        });
    } catch (err) {
        next(err);
    }
};

// Delete vehicle by ID
exports.deleteVehicle = async (req, res, next) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        next(err);
    }
};
