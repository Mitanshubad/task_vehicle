// import React, { useState } from 'react';
// import vehicleService from '../services/vehicleService';

// const VehicleForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         speed: '',
//         averageSpeed: '',
//         temperature: '',
//         fuelLevel: '',
//         engineStatus: '',
//         onOff: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await vehicleService.createVehicle(formData);
//             // Reset form data or do something else on successful submission
//         } catch (error) {
//             console.error('Error creating vehicle:', error);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-200">
//             <div className="bg-white shadow-md rounded px-16 pt-10 pb-4 mb-10 mt-2">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Create Vehicle</h2>
//                 <form onSubmit={handleSubmit} className="max-w-lg">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Vehicle Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter vehicle name"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="speed">Speed</label>
//                         <input
//                             type="number"
//                             id="speed"
//                             name="speed"
//                             value={formData.speed}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter speed"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="averageSpeed">Average Speed</label>
//                         <input
//                             type="number"
//                             id="averageSpeed"
//                             name="averageSpeed"
//                             value={formData.averageSpeed}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter average speed"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">Temperature</label>
//                         <input
//                             type="number"
//                             id="temperature"
//                             name="temperature"
//                             value={formData.temperature}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter temperature"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fuelLevel">Fuel Level</label>
//                         <input
//                             type="number"
//                             id="fuelLevel"
//                             name="fuelLevel"
//                             value={formData.fuelLevel}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter fuel level"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="engineStatus">Engine Status</label>
//                         <input
//                             type="text"
//                             id="engineStatus"
//                             name="engineStatus"
//                             value={formData.engineStatus}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter engine status"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="onOff">On-Off Status</label>
//                         <select
//                             id="onOff"
//                             name="onOff"
//                             value={formData.onOff}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         >
//                             <option value={true}>On</option>
//                             <option value={false}>Off</option>
//                         </select>
//                     </div>
//                     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default VehicleForm;
import React, { useState } from 'react';
import vehicleService from '../services/vehicleService';

const VehicleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        speed: '',
        averageSpeed: '',
        temperature: '',
        fuelLevel: '',
        engineStatus: '',
        onOff: ''
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await vehicleService.createVehicle(formData);
            // Show success popup
            setShowSuccessPopup(true);
            // Reset form data after successful submission
            setFormData({
                name: '',
                speed: '',
                averageSpeed: '',
                temperature: '',
                fuelLevel: '',
                engineStatus: '',
                onOff: ''
            });
            // Reload the page after a delay
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error creating vehicle:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white shadow-md rounded px-16 pt-10 pb-4 mb-10 mt-2">
                <h2 className="text-2xl font-bold mb-4 text-center">Create Vehicle</h2>
                <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Vehicle Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter vehicle name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="speed">Speed</label>
                        <input
                            type="number"
                            id="speed"
                            name="speed"
                            value={formData.speed}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter speed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="averageSpeed">Average Speed</label>
                        <input
                            type="number"
                            id="averageSpeed"
                            name="averageSpeed"
                            value={formData.averageSpeed}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter average speed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">Temperature</label>
                        <input
                            type="number"
                            id="temperature"
                            name="temperature"
                            value={formData.temperature}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter temperature"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fuelLevel">Fuel Level</label>
                        <input
                            type="number"
                            id="fuelLevel"
                            name="fuelLevel"
                            value={formData.fuelLevel}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter fuel level"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="engineStatus">Engine Status</label>
                        <input
                            type="text"
                            id="engineStatus"
                            name="engineStatus"
                            value={formData.engineStatus}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter engine status"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="onOff">On-Off Status</label>
                        <select
                            id="onOff"
                            name="onOff"
                            value={formData.onOff}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value={true}>On</option>
                            <option value={false}>Off</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
            </div>
            {/* Success popup */}
            {showSuccessPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white shadow-md rounded p-8">
                        <p className="text-xl text-green-500 font-bold">Vehicle added successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehicleForm;
