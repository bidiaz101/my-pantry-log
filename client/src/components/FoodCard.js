import React,{ useState } from 'react'

function FoodCard({ id, name, category, dayUntilExp, table, price, spoilage }) {
    const [showDeets, setShowDeets] = useState(false)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{category}</h2>
            <h3>{spoilage}</h3>
        </div>
    )
}

export default FoodCard
