// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center">
//         {/* <img src="https://etimg.etb2bimg.com/thumb/msid-59236460,width-1200,height-900,resizemode-4/.jpg" alt="Logo" className="w-10 h-10 mr-2" />
//         <span className="font-bold">VehiTrack</span> */}
//       </div>
      
//       {/* Navigation Links */}
//       <ul className="flex space-x-6">
//         <li><a href="#" className="hover:text-gray-300">Home</a></li>
//         <li><a href="#" className="hover:text-gray-300">About Us</a></li>
//         <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
//       </ul>

//       {/* Duplicate Login/Signup Buttons */}
//       <div className="flex space-x-4">
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
//         <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">Signup</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center md:py-2">
      {/* Logo */}
      <div className="flex items-center">
        {/* <img src="https://etimg.etb2bimg.com/thumb/msid-59236460,width-1200,height-900,resizemode-4/.jpg" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="font-bold">VehiTrack</span> */}
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6">

        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
      </ul>

      {/* Duplicate Login/Signup Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login/Signup</button>

      </div>
    </nav>
  );
};

export default Navbar;
