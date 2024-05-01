// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Form from './components/Form';
import Home from './components/Home';
import Table from './components/Table';

function App() {
  const [component, setComponent] = useState('Home');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200">
        <Sidebar setComponent={setComponent} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="bg-blue-500 h-16">
          <Navbar />
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto">
          {component === 'Form' && <Form />}
          {component === 'Home' && <Home />}
          {component === 'Table' && <Table />}
        </div>
      </div>
    </div>
  );
}

export default App;
