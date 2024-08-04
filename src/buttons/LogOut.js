import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="inline-block bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 px-5 rounded">
      Log Out
    </button>
  );
};

export default LogOut;
