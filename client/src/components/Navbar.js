import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav id='navbar'>
            <NavLink to="/all-foods">All Foods</NavLink>
            <NavLink to='/my-pantry'>My Pantry</NavLink>
        </nav>
    )
}

export default Navbar