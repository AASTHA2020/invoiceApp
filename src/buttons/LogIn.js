// src/buttons/LogIn.js
import React, { useState } from 'react';
import { useAuth } from '../context/auth'; // Use named import

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Destructure the required function

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert('Login successful!'); // Add an alert to confirm successful login
    } catch (error) {
      alert('Error logging in: ' + error.message); // Display error message
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LogIn;
