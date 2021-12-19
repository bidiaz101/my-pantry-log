import React, { useState, useEffect } from "react";

function MyPantry() {
    const [pantryItems, setPantryItems] = useState([])

    useEffect(() => {
        fetch('/user_foods')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])

    return (
        <>
            <h1>My Pantry</h1>
        </>
    )
}

export default MyPantry
