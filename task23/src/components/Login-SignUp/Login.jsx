import React from 'react';
import './Auth.css';

function Login() {
    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2>Login</h2>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    required
                />
                <button type="submit" className="auth-button">LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
