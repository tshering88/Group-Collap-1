// src/Login.js

import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your authentication logic
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <div className="card">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                 <div style={{marginBottom:'1rem'}}>
                    <input
                        type="text"
                        value={username}
                        placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div style={{marginBottom:'1rem'}}>
                    <input
                        type="password"
                        value={password}
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
                
            </form>
        </div>
    );
};

export default Login;