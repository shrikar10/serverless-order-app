import React, { useState } from 'react';
import api from '../services/api'; // Make sure to import your API module
import '../styles/SignUpForm.css';

function SignUpPage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword){
      setMessage('Passwords do not match');
      return;
    }
    try {
      // Replace with your sign-up API endpoint
      const response = await api.post('/users', {
        username: user.firstName, // Assuming username is email
        email: user.email,
        full_name: `${user.firstName} ${user.lastName}`,
        password: user.password
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Error');
    }
  };

  return (
    <div className="outer-container">
    <div className="container">
      <div className="content">
        <h2>Welcome to Our Service</h2>
        <p>Sign up to get started with our amazing platform.</p>
      </div>
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit">Sign Up</button>
          {message && <p className="error-message">{message}</p>}
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUpPage;