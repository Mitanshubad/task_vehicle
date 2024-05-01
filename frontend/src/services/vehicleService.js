// services/vehicleService.js

import axios from 'axios';

const BASE_URL = 'https://task-vehicle.onrender.com/api/vehicles';

const createVehicle = async (vehicleData) => {
    try {
        const response = await axios.post(BASE_URL, vehicleData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllVehicles = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getVehicleById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateVehicleField = async (id, fieldName, fieldValue) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { [fieldName]: fieldValue });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicleField
};
