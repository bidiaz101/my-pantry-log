import React, { useState, useEffect, useContext } from "react";
import FoodCard from "./FoodCard";
import { UserContext } from "../context/user"

function MyPantry() {
    const [pantryItems, setPantryItems] = useState([])
    const {user, setUser} = useContext(UserContext)

    // Used to calculate how many days(daysInt(Integer)) it has been since the user last logged in
    const daysInt = Math.floor((new Date() - new Date(user.last_login + 'T00:00:00')) / 86400000)

    useEffect(() => {
        fetch('/user_foods')
        .then(resp => resp.json())
        .then(items => {
            setPantryItems(items)

            if(daysInt > 0){
                items.forEach(item => {
                    let daysLeft = item.user_days_until_expiration - daysInt
                    if(daysLeft < 0) daysLeft = 0
                    
                    fetch(`/user_foods/${item.id}`, {
                        method: "PATCH",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ user_days_until_expiration: daysLeft })
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
        })
    }, [daysInt, setUser, user.id])

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
