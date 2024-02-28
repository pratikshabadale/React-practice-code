//create a registration form using react js And onSubmit you need to store form data in localStorage in JSON form.

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    console.log("Registration successful!", formData);
  };

  return (
    <div className='container mt-5'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username:
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter Your Name'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Enter Your Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
