// src/pages/components/Header.js
import React from 'react';
import { useAuth } from '../../context/auth'; // Use named import

const Header = () => {
  const { user } = useAuth(); // Use hook

  return (
    <header>
      {/* Your header components */}
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in</p>
      )}
    </header>
  );
};

export default Header;
