import React, {useContext} from 'react'
import {UserContext} from '../context/user'

function Header() {
    const {user} = useContext(UserContext)

    return (
        <h1 id={user.username ? 'header' : null}>🍎 My Pantry</h1>
    )
}

export default Header
