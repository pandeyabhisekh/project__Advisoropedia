import  { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import PostList from './post';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the server
      const response = await axios.post('/signup', formData);
      console.log(response.data); // Success message and JWT token
      // Simulate sending welcome email notification
      console.log('Welcome email sent!');
      // Redirect to post list screen
      // You need to implement React Router for redirection
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Display error message to the user
    }
  };

  return (
    <><PostList></PostList><form onSubmit={handleSubmit}>
      {/* Input fields */}
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name" />
      <input
        type="text"
        name="profilePicture"
        value={formData.profilePicture}
        onChange={handleChange}
        placeholder="Profile Picture URL" />
      {/* Terms and conditions checkbox */}
      <label>
        <input type="checkbox" required />
        I agree to the terms and conditions
      </label>
      {/* Submit button */}
      <button type="submit">Register</button>
    </form></>
   
  );
};

export default Register;
