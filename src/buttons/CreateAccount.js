import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && email && password) {
      navigate('/thank-you');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default CreateAccount;
