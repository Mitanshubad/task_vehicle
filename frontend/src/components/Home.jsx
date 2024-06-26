import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import vehicleService from '../services/vehicleService';

const VehicleDetails = ({ match ,vehicleId }) => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedVehicleId, setSelectedVehicleId] = useState('');

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await vehicleService.getAllVehicles();
                setVehicles(response.data.vehicles);
                setSelectedVehicleId(vehicleId);
                if (response.data.vehicles.length > 0) {

                    setSelectedVehicleId(vehicleId);
                    // response.data.vehicles[0]._id
                }
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    useEffect(() => {
         setSelectedVehicle(vehicleId);
        const selected = vehicles.find(vehicle => vehicle._id === selectedVehicleId);
        setSelectedVehicle(selected);
    }, [selectedVehicleId, vehicles]);

    const handleSelectChange = (e) => {
        setSelectedVehicleId(e.target.value);
    };

    return (
        <div className="container  mx-auto  min-h-screen  p-8 bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
                {/* Vehicle Details */}
                <div className="col-span-3 mb-4">
                    <h2 className="text-2xl font-bold text-center">Vehicle Details</h2>
                    <h3 className='text-xl font-bold text-gray-600'>Select Your Favourite Vehicle :</h3>
                    {/* Vehicle Dropdown */}
                    <div className="mb-4">
                        <select
                            value={selectedVehicleId}
                            onChange={handleSelectChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {vehicles.map(vehicle => (
                                <option key={vehicle._id} value={vehicle._id}>{vehicle.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Camera Buttons */}
                <div className="mb-4 col-span-3 grid grid-cols-2 gap-4 justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaCamera /> Camera 1
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaCamera /> Camera 2
                    </button>
                </div>

                {/* On/Off Switch */}
                {/* <div className="mb-4 col-span-3 flex items-center justify-center">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center">Engine Status:</label>
                    <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-500" />
                    <span className="ml-2">On</span>
                </div> */}

                {/* Map */}
                <div className="col-span-2 mb-4 flex justify-center">
                    <iframe
                        title="Dummy Map"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.123195230914!2d-122.08453708465393!3d37.421999979815334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b5b88e5095%3A0x62f2b67d7d13cb44!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610982003656!5m2!1sen!2sus"
                    ></iframe>
                </div>

                {/* Speed Box */}
                <div className="bg-gray-200 p-4">
                    <p className="font-bold text-center">Speed:</p>
                    <p className="text-center">{selectedVehicle ? selectedVehicle.speed : '-'}</p>
                </div>

                {/* Average Speed Box */}
                <div className="bg-gray-200 p-4">
                    <p className="font-bold text-center">Average Speed:</p>
                    <p className="text-center">{selectedVehicle ? selectedVehicle.averageSpeed : '-'}</p>
                </div>

                {/* Fuel Level */}
                <div className="bg-gray-200 p-4">
                    <p className="font-bold text-center">Fuel Level:</p>
                    <p className="text-center">{selectedVehicle ? selectedVehicle.fuelLevel : '-'}</p>
                </div>

                {/* Temperature */}
                <div className="bg-gray-200 p-4">
                    <p className="font-bold text-center">Temp:</p>
                    <p className="text-center">{selectedVehicle ? selectedVehicle.temperature : '-'}</p>
                </div>
            </div>

            {/* Display Vehicle Name */}
            <div className="mt-8 text-center">
                <p className="text-lg font-semibold">Selected Vehicle: {selectedVehicle ? selectedVehicle.name : '-'}</p>
            </div>
        </div>
    );
};

export default VehicleDetails;
