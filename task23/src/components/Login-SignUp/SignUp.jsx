import React from 'react';
import './Auth.css';

function SignUp() {
    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2>Sign Up</h2>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    required
                />
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
                <button type="submit" className="auth-button">SIGN UP</button>
            </form>
        </div>
    );
}

export default SignUp;
