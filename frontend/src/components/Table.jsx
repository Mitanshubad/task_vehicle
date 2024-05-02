import React, { useState, useEffect } from 'react';
import vehicleService from '../services/vehicleService';

const VehicleList = ({setVehicleId}) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await vehicleService.getAllVehicles();
                setVehicles(response.data.vehicles);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    const updateField = async (id, field, value) => {
        try {
            await vehicleService.updateVehicleField(id, { [field]: value });
            // Update the local state after successful update
            const updatedVehicles = vehicles.map(vehicle => {
                if (vehicle._id === id) {
                    return { ...vehicle, [field]: value };
                }
                return vehicle;
            });
            setVehicles(updatedVehicles);
        } catch (error) {
            console.error(`Error updating ${field} for vehicle with ID ${id}:`, error);
        }
    };

    const handleEditVehicle = (id) => {
        setVehicleId(id);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Vehicle List</h2>
            <div className="overflow-x-auto">
                <table className="table-auto bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Speed</th>
                            <th className="px-4 py-2">Average Speed</th>
                            <th className="px-4 py-2">Temperature</th>
                            <th className="px-4 py-2">Fuel Level</th>
                            <th className="px-4 py-2">Engine Status</th>
                            <th className="px-4 py-2">On-Off</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map(vehicle => (
                            <tr key={vehicle._id}>
                                <td className="border px-4 py-2">{vehicle.name}</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={vehicle.speed}
                                        onChange={e => updateField(vehicle._id, 'speed', e.target.value)}
                                        className="input-field"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={vehicle.averageSpeed}
                                        onChange={e => updateField(vehicle._id, 'averageSpeed', e.target.value)}
                                        className="input-field"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={vehicle.temperature}
                                        onChange={e => updateField(vehicle._id, 'temperature', e.target.value)}
                                        className="input-field"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={vehicle.fuelLevel}
                                        onChange={e => updateField(vehicle._id, 'fuelLevel', e.target.value)}
                                        className="input-field"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        value={vehicle.engineStatus}
                                        onChange={e => updateField(vehicle._id, 'engineStatus', e.target.value)}
                                        className="input-field"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <select
                                        value={vehicle.onOff ? 'On' : 'Off'}
                                        onChange={e => updateField(vehicle._id, 'onOff', e.target.value === 'On')}
                                        className="input-field"
                                    >
                                        <option value="On">On</option>
                                        <option value="Off">Off</option>
                                    </select>
                                </td>
                                <td className="border px-4 py-2">
                                   <button onClick={() => handleEditVehicle(vehicle._id)} >Edit vehicle</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VehicleList;
