// // Sidebar.js
// import React, { useState } from 'react';

// const Sidebar = ({ setComponent }) => {
//   const [activeLink, setActiveLink] = useState('Home');

//   const handleComponentChange = (component) => {
//     setComponent(component);
//     setActiveLink(component);
//   };

//   return (
//     <div className="bg-gray-300 h-full w-64 flex flex-col ">
//      <div className='flex flex-row items-center justify-center  bg-gray-600'>
//      <div className="flex items-center justify-center h-20 text-white">
//         <img src="https://etimg.etb2bimg.com/thumb/msid-59236460,width-1200,height-900,resizemode-4/.jpg" alt="Logo" className="w-24 h-20" />
//       </div>
//       <div>
//         <div className="font-bold font-heavy text-white mt-4 ml-4">VehiTrack</div>
//      </div>
//      </div>
//      <ul className='flex flex-col mt-4 mx-20 gap-3 '>
//   <li onClick={() => handleComponentChange('Home')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Home' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Home</li>
//   <li onClick={() => handleComponentChange('Form')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Form' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Form</li>
//   <li onClick={() => handleComponentChange('Table')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Table' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Table</li>
// </ul>

      
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ setComponent }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  const handleComponentChange = (component) => {
    setComponent(component);
    setActiveLink(component);
    setShowMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div className="relative h-full md:flex md:flex-col">
      {/* Hamburger Button for Mobile */}
      <div className="absolute top-0 left-0 z-50 md:hidden">
        <button onClick={() => setShowMenu(!showMenu)} className="text-white p-4 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {showMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-75 md:hidden">
          <div className="flex flex-col h-full justify-center items-center">
            <ul className="text-white text-2xl">
              <li onClick={() => handleComponentChange('Home')} className={`cursor-pointer ${activeLink === 'Home' ? 'text-blue-500' : 'text-gray-300 hover:text-blue-500'} transition duration-300 ease-in-out`}>Home</li>
              <li onClick={() => handleComponentChange('Form')} className={`cursor-pointer ${activeLink === 'Form' ? 'text-blue-500' : 'text-gray-300 hover:text-blue-500'} transition duration-300 ease-in-out`}>Form</li>
              <li onClick={() => handleComponentChange('Table')} className={`cursor-pointer ${activeLink === 'Table' ? 'text-blue-500' : 'text-gray-300 hover:text-blue-500'} transition duration-300 ease-in-out`}>Table</li>
            </ul>
          </div>
        </div>
      )}

      {/* Sidebar Content */}
      <div className="hidden md:flex md:flex-col h-full bg-gray-300">
        <div className='flex flex-row items-center justify-center bg-gray-600'>
          <div className="flex items-center justify-center h-20 text-white">
            <img src="https://etimg.etb2bimg.com/thumb/msid-59236460,width-1200,height-900,resizemode-4/.jpg" alt="Logo" className="w-24 h-20" />
          </div>
          <div>
            <div className="font-bold font-heavy text-white mt-4 ml-4">VehiTrack</div>
          </div>
        </div>

        <ul className='flex flex-col mt-4 mx-20 gap-3'>
          <li onClick={() => handleComponentChange('Home')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Home' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Home</li>
          <li onClick={() => handleComponentChange('Form')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Form' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Form</li>
          <li onClick={() => handleComponentChange('Table')} className={`cursor-pointer font-bold font-heavy ${activeLink === 'Table' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'} transition duration-300 ease-in-out ml-4 mt-2`}>Table</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

