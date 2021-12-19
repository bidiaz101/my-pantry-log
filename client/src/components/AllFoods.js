import React, {useEffect, useState} from 'react'
import FoodCard from './FoodCard'

function AllFoods() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('/foods')
        .then(resp => resp.json())
        .then(data => setFoods(data))
    }, [])

    const foodsToDisplay = foods.map(food => {
        return (
            <FoodCard 
                id={food.id}
                name={food.name} 
                daysUntilExp={food.days_until_expiration} 
                category={food.category}
                table={food.description}
                price={food.price}
                spoilage={food.signs_of_spoilage}
                key={food.id}
            />
        )
    })

    return (
        <div>
            {foodsToDisplay}
        </div>
    )
}

export default AllFoods
