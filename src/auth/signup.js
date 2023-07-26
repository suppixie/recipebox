import React from "react";
import '../auth/signup.css';
function SignUpPage(){
    return(
        <>
        <div className="signup_page_background">
        <div className="signup_block">
            <h2>Login</h2>
            <form action="/signup" method="post" className="signupForm"/>
                <input type="text" name="username" placeholder="Username" required></input><br/>
                <input type="email" name="email" placeholder="Email-id" required></input><br/>
                <input type="password" name="password" placeholder="Password" required></input><br/>
                <button type="submit">Sign Up</button><br/>
            <p>Already have an account? <a href="/login.js">Login</a></p>
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
export default SignUpPage;