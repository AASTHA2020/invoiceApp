// src/buttons/CreateAccount.js
import React, { useState } from 'react';
import { useAuth } from '../context/auth'; // Use named import

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth(); // Destructure the required function

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert('Sign up successful!'); // Add an alert to confirm successful signup
    } catch (error) {
      alert('Error signing up: ' + error.message); // Display error message
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default CreateAccount;
