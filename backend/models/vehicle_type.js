// models/vehicleModel.js

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    speed: { type: Number, required: true },
    averageSpeed: { type: Number, required: true },
    temperature: { type: Number, required: true },
    fuelLevel: { type: Number, required: true },
    engineStatus: { type: String, required: true },
    onOff: { type: String}
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
