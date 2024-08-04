import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigate('/invoice-form');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogIn;
