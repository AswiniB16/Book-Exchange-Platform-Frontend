import React, { useState } from 'react';
import axios from "axios";
import './Login.css';
import { useUser } from './UserContext';

const Login = ({ onClose }) => {
  const { setUser } = useUser();
  const [action, setAction] = useState('');
  const [resetPopUp, setResetPopUp] = useState('');
  const [password, setPasswordValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [userName, setUsernameValue] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [securityQuestionAnswer, setSecurityQuestionValue] = useState("");

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await axios.post("http://localhost:8081/bookexchangeplatform/reset-password", data);
    alert("Password Reset Successfully");

    onClose();
  };


  const handleResetValidationSubmit = async (e) => {
    e.preventDefault();
    const data = { email, securityQuestionAnswer };

    try {
      const response = await axios.post("http://localhost:8081/bookexchangeplatform/validate-request", data);


      if (response.data.length === 0) {
        alert("Validation Failed. Please try again.");
      } else {
        alert("Validation Successful");
        setResetPopUp('');
        setResetPassword(' activeReset');
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:8081/bookexchangeplatform/login", data);
      if (response.data.length === 0) {
        alert("Invalid Username or Password. Please try again.");
      } else {
        alert("Login successful");
        const userData = { userName: response.data[0].userName, id: response.data[0].id };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        onClose();
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const data = { userName, email, password, securityQuestionAnswer };

    try {
      const response = await axios.post("http://localhost:8081/bookexchangeplatform/register", data);
      if (response.data.email == null) {
        alert("Oops! That email is already in use. Please try another one.");
      }
      else {
        alert("User added successfully");
        onClose();
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={`login${action}`}>
      {/* Loginform */}
      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="logindata">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
          </div>
          <div className="logindata">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <div className="signup">
            <p>Need an account? <a href="#" onClick={() => setAction(' active')}>Sign Up</a></p>
          </div>
          <div className="signup">
            <p>Forgot Password? <a href="##" onClick={() => {
              setResetPopUp(' active1');
              setAction(' active2');
            }}>Reset</a></p>
          </div>
        </form>
      </div>
      {/* Reset Password Validation*/}
      <div className={`form-resetValidation ${resetPopUp === ' active1' ? 'active1' : ''}`}>
        <form onSubmit={handleResetValidationSubmit}>
          <h1>Reset Password</h1>
          <div className="reset-text">"Forgot your password? No worries! Just enter your registered email
            and answer your security question to reset it and get back in."</div>

          <div className="logindata">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
          </div>
          <div className="logindata">
            <div className='security-question'>Security Question</div>
            <input type="text" placeholder="What's your all-time favorite book?" onChange={(e) => setSecurityQuestionValue(e.target.value)} required />
          </div>
          <button type="submit">Verify</button>

        </form>
      </div>
      {/* Reset Password */}
      <div className={`form-resetPassword ${resetPassword === ' activeReset' ? 'activeReset' : ''}`}>
        <form onSubmit={handleResetPasswordSubmit}>
          <h1>Reset Password</h1>

          <div className="logindata">
            <input
              type="text"
              placeholder="New password"
              onChange={(e) => setPasswordValue(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>

        </form>
      </div>

      {/* Register */}
      <div className={`form-register ${action ? 'active' : ''}`}>
        <form onSubmit={handleRegisterSubmit}>
          <h1>Register</h1>
          <div className="logindata">
            <input type="text" placeholder='Username' onChange={(e) => setUsernameValue(e.target.value)} required />
          </div>
          <div className="logindata">
            <input type="text" placeholder='Email' onChange={(e) => setEmailValue(e.target.value)} required />
          </div>
          <div className="logindata">
            <input type="password" placeholder='Password' onChange={(e) => setPasswordValue(e.target.value)} required />
          </div>
          <div className="logindata">
            <div className='security-question'>Security Question</div>

            <input type="text" placeholder="What's your all-time favorite book?" onChange={(e) => setSecurityQuestionValue(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
          <div className="signup">
            <p>Already have an account?<a href="#" onClick={() => { setAction(''); setResetPopUp(''); }}> Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
