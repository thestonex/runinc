import React from 'react'
import Nav from './Nav/Nav'
import './header.scss'
import Search from './Nav/search/Search'

const Header = () => {
    return (
        <header>
            <h1 className="topnav"><span>Run</span>nic</h1>
            <Nav />
            <Search />
        </header>
    )
}

export default Header
