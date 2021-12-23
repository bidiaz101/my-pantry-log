import React, { useState, useEffect, useContext } from "react";
import FoodCard from "./FoodCard";
import { UserContext } from "../context/user"

function MyPantry() {
    const [pantryItems, setPantryItems] = useState([])

    const {user, setUser} = useContext(UserContext)

    const daysFloat = (new Date() - new Date(user.last_login)) / 86400000
    const daysInt = Math.floor(daysFloat)

    if(daysInt > 0){
        pantryItems.map(item => {
            let daysLeft = item.user_days_until_expiration - daysInt
            if(daysLeft < 0) daysLeft = 0
            
            fetch(`/user_foods/${item.id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_days_until_expiration: daysLeft
                })
            })
        })

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ last_login: new Date() })
        })
        .then(resp => resp.json())
        .then(userData => setUser(userData))
    }

    useEffect(() => {
        fetch('/user_foods')
        .then(resp => resp.json())
        .then(data => setPantryItems(data))
    }, [])

    const itemsToDisplay = pantryItems.map(item => {
        const {name, category} = item.food

        return (
            <FoodCard 
                id={item.id}
                name={name} 
                category={category} 
                price={item.user_price} 
                table={item.food.description} 
                spoilage={item.food.signs_of_spoilage} 
                inPantry={true} 
                key={item.id}
                pantryItems={pantryItems}
                setPantryItems={setPantryItems}
                quantity={item.quantity}
                unit={item.unit}
                notes={item.notes}
                daysUntilExp={item.user_days_until_expiration}
            />
        )
    })

    return (
        <div className="grid-container-formless">
            {itemsToDisplay}
        </div>
    )
}

export default MyPantry
