import React, { useState, useEffect } from 'react'

const UserContext = React.createContext("")

function UserProvider({children}) {
    const [user, setUser] = useState({
        id: 0,
        username: ''
    })

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => setUser(data))
    }, [])

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
