import React from "react";
import PantryCard from "./PantryCard";

function MyPantry({ pantryItems, setPantryItems }) {
    const itemsToDisplay = pantryItems.map(item => {
        const {name, category} = item.food

        return (
            <PantryCard 
                id={item.id}
                name={name} 
                category={category} 
                price={item.user_price} 
                table={item.food.description} 
                spoilage={item.food.signs_of_spoilage}
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
        <div className="grid-container">
            {itemsToDisplay}
        </div>
    )
}

export default MyPantry
