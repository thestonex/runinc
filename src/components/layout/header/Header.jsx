import React from 'react'
import Nav from './Nav/Nav'
import './header.scss'
import Search from './Nav/search/Search'
import logo from '../../../gfx/img/runinc_logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className="logo"/>
            <Nav />
            <Search />
        </header>
    )
}

export default Header
