import './components/styles/navbar.css'
import {Link} from 'react-router-dom';
import React from "react";

export default function Navbar() {
  
  return (
    <div className='header'>
      <h3>Recipebox</h3>

      <div className="pages">
          <ul>
                <li><Link to="/" className='page-items'>Home</Link></li>
                <li><Link to="/Categories"  className='page-items'>Categories</Link></li>
                <li><Link to="/Community" className='page-items'>Community</Link></li>
                <li><Link to="/Login" className='page-items'>Login</Link></li>
                <li><Link to="/Signup" className='page-items'>Sign Up</Link></li>

          </ul>
      </div>
    </div>
  );
}