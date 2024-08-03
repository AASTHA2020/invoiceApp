// src/components/Logout.js
import React from 'react';
import { useAuth } from '../context/auth'; // Use named import

const Logout = () => {
  const { logout } = useAuth(); // Destructure the required function

  const handleLogout = async () => {
    try {
      await logout();
      // Handle successful logout
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
