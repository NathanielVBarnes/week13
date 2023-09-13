// src/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <div className="input-container">
        <input type="text" placeholder="Username" className="input" />
        <input type="password" placeholder="Password" className="input" />
      </div>
    </div>
  );
};

export default LoginForm;
