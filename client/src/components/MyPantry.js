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
