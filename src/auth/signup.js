import '../auth/signup.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import LoginPage from './login';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookies] = useCookies(['user']);

  const handle = (e) => {
    e.preventDefault()
    setCookies('Username', username, { path: '/' })
    setCookies('EmailId', email, { path: '/' })
    setCookies('Password', password, { path: '/' })
    alert("Sign Up Successful");
    window.location.href = "/";
  }

  return (<>
              {!cookies.user || !cookies.EmailId ?(

          <div className='signup_and_login'>
            <div className="signup_page_background">
              <h2>Sign Up</h2>
              <form onSubmit={e=>handle(e)}>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required /><br />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br />
                <button type="submit">Register</button>
              </form>
            </div>
            <hr></hr>
            <div className='loginpage'>
              <LoginPage />
            </div>
          </div>)
      :(window.location.assign('/Profile') )}

    </>
  );
};

export default SignUpPage;
