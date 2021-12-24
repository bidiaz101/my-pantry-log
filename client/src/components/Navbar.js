import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav id='navbar'>
            <NavLink to="/foods">All Foods</NavLink>
            <NavLink to='/user-foods'>My Pantry</NavLink>
        </nav>
    )
}

export default Navbar