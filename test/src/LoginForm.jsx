// src/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-form p-4 border">
        <h3 className="login-heading">Log In</h3>
        <div className="input-container">
          <input type="text" placeholder="Username" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-2" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

