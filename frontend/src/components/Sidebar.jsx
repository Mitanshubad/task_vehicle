// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ setComponent }) => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleComponentChange = (component) => {
    setComponent(component);
    setActiveLink(component);
  };

  return (
    <div className="bg-gray-300 h-full w-64 flex flex-col ">
     <div className='flex flex-row items-center justify-center  bg-gray-600'>
     <div className="flex items-center justify-center h-20 text-white">
        <img src="https://etimg.etb2bimg.com/thumb/msid-59236460,width-1200,height-900,resizemode-4/.jpg" alt="Logo" className="w-24 h-20" />
      </div>
      <div>
        <div className="font-bold font-heavy text-white mt-4 ml-4">VehiTrack</div>
     </div>
     </div>
     <ul className='flex flex-col mt-4 mx-20 gap-3 '>
  <li onClick={() => handleComponentChange('Home')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Home' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Home</li>
  <li onClick={() => handleComponentChange('Form')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Form' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Form</li>
  <li onClick={() => handleComponentChange('Table')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Table' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Table</li>
</ul>

      
    </div>
  );
};

export default Sidebar;
