import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

function MyPantry() {
    const [pantryItems, setPantryItems] = useState([])

    useEffect(() => {
        fetch('/user_foods')
        .then(resp => resp.json())
        .then(data => setPantryItems(data))
    }, [])

    const itemsToDisplay = pantryItems.map(item => {
        const {name, category} = item.food

        return (
            <FoodCard 
                name={name} 
                category={category} 
                price={item.user_price} 
                table={item.food.description} 
                spoilage={item.food.signs_of_spoilage} 
                inPantry={true} 
                key={item.id}
            />
        )
    })

    return (
        <>
            <h1>My Pantry</h1>
            {itemsToDisplay}
        </>
    )
}

export default MyPantry
