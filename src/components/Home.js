import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className="text">
            <h1 className="title">Welcome!!!</h1>
            <NavLink to="/">
                <button className="login_btn">Log out</button>
            </NavLink>
        </div>
    )
}
