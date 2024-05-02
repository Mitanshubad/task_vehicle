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



exports.updateVehicle = async (req, res, next) => {
    try {
        const { name, speed, averageSpeed, temperature, fuelLevel, engineStatus, onOff } = req.body;

        // Check if any required field is missing in the request body
        if (!name || !speed || !averageSpeed || !temperature || !fuelLevel || !engineStatus) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields are required for vehicle update.'
            });
        }

        // Find the vehicle by ID and update it with the new data
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, {
            name,
            speed,
            averageSpeed,
            temperature,
            fuelLevel,
            engineStatus,
            onOff
        }, {
            new: true, // Return the modified document rather than the original
            runValidators: true // Run model validation before updating
        });

        // Check if the vehicle was not found
        if (!updatedVehicle) {
            return res.status(404).json({
                status: 'error',
                message: 'Vehicle not found.'
            });
        }

        // Send success response with updated vehicle data
        return res.status(200).json({
            status: 'success',
            data: {
                vehicle: updatedVehicle
            }
        });
    } catch (err) {
        // Handle errors
        console.error("Error updating vehicle:",err , err.message);
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
