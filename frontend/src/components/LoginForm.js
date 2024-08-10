import React, { useState } from 'react';
import api from '../services/api';
import '../styles/LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/validate', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Test Login</h1> {/* Title: Edit as needed */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
