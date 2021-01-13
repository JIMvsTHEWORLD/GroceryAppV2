import React, { useState } from 'react';
import '../styles/styles.scss'

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function userLogin(e) {
        e.preventDefault()
        fetch('url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(res => props.setLogin(true))
    }

    return(
        <div className="MainDiv">
            <div className="Login">
                <form className="LoginForm" onSubmit={(e) => userLogin(e)}>
                    <h4>Login</h4>
                    <div className="input-group">
                        <label>User </label>
                        <input
                        id="user"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Password: </label>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="loginButton">
                        Login
                    </button>
                </form>
            </div>       
        </div>
    );
}

export default Login;