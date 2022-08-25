import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function SignIn() {
    return (
        <div className="signIn">
            <form action="/home">
                <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="submit_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p><NavLink to="/register">Create an account</NavLink></p>
                <p><NavLink to="/">Back to Homepage</NavLink></p>
            </footer>
        </div>
    )
}
