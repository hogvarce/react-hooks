import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => (
    <nav className="navbar navbar-bar navbar-expand-lg navbar-light">
        <div className="navbar-brand">Note App </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
)