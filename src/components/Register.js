import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function SignUp() {

    return (
        <div className="signUp">
            <form action="/home">
                <p>
                    <label>Username</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="submit_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><NavLink to="/">Back to Homepage</NavLink></p>
            </footer>
        </div>
    )
}
