// services/vehicleService.js

import axios from 'axios';
// https://task-vehicle.onrender.com
const BASE_URL = 'http://localhost:3000/api/vehicles';

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

const updateVehicleField = async (id,formData) => {
    try {
        console.log("update field id ",id , formData);
        const response = await axios.put(`${BASE_URL}/${id}`,  formData );
        return response.data;
    } catch (error) {
        console.log(error.message)
        throw error;
    }
};

export default {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicleField
};
