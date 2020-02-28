import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" className="Navbar_link" activeClassName="navbar_link--active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/event" className="Navbar_link" activeClassName="navbar_link--active">Event</NavLink>
                </li>
                <li>
                    <NavLink to="/Shop" className="Navbar_link" activeClassName="navbar_link--active">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className="Navbar_link" activeClassName="navbar_link--active">Contact us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
