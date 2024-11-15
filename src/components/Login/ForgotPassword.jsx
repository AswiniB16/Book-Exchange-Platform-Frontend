import React, { useState } from 'react';
import './Login.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className="reset-popup">
      <h3 className='reset-header'>Reset Password</h3>
      <div className="reset-text">If you have forgot your password or wish to reset it please provide to registered emailid and answer the security question to reset it</div>
      <input type="text" placeholder="Enter email" onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="text" placeholder="Which is your favourite book?" onChange={(e) => setOtp(e.target.value)} />


    </div>
  );
};

export default ForgotPassword;
