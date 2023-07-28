import '../auth/signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import ProfilePage from '../components/profile';

const SignUpPage = () => {
  const[username ,setUsername]=useState('');
  const[email ,setEmail]=useState('');
  const[password ,setPassword]=useState('');
  const[cookies, setCookies]=useCookies(['user']);

const handle= ()=>{
  setCookies('Username', username,{path:'/'})
  setCookies('EmailId', email,{path:'/'})
  setCookies('Password', password,{path:'/'})
  alert("Sign Up Successful");
  window.location.href="/profile"
}

  return (
    <div className="signup_page_background">
      <h2>User Registration</h2>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <button type="submit" onClick={handle}>Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
      {cookies && <ProfilePage cookieData={cookies} />}
    </div>
  );
};

export default SignUpPage;
