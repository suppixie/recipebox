import '../auth/login.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookies] = useCookies(['user']);



  const handleLogin = (e) => {
    e.preventDefault();
    var cookieEmail = cookies.EmailId;
    var cookiePassword = cookies.Password;
    if ((cookieEmail === email) && (cookiePassword === password)) {
      setCookies('user', email, { path: '/' });
      alert('Login successful');
      window.location.href = "/";
    }

    else {
      alert('Invalid email or password')
    }
  }


  return (
    <div className="login_page_background">
      <h2>User Login</h2>
      <form onSubmit={e => handleLogin(e)}>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email-Id" required /><br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

