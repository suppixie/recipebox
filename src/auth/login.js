import React from "react";
import '../auth/login.css';
function LoginPage(){
    return(
        <>
        <div className="login_page-background">
        <div className="login_block">
            <h2>Login</h2>
            <form action="/login" method="post" className="loginForm"/>
                <input type="email" name="email" placeholder="Email-id" required></input><br/>
                <input type="password" name="password" placeholder="Password" required></input><br/>
                <button type="submit">Login</button><br/>
            <p>Don't have an account? <a href="signup.js">Sign Up here</a></p>
        </div>
        </div>
        <script>
            const response = JSON.parse(xhr.responseText);
            if (response.message === 'Login successful!') {
            alert(response.message);
            window.location.href = '/home.js';
            } else {
            alert(response.message);
            }
        </script>
  </>
  )
}
export default LoginPage;