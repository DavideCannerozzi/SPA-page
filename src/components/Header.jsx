import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1 class="title">React Router</h1>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul>
        </header>
    )
}
