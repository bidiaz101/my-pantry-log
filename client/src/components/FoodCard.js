import React,{ useState } from 'react'

function FoodCard({ id, name, category, daysUntilExp, table, price, spoilage }) {
    const [showDeets, setShowDeets] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setShowDeets(!showDeets)}>{showDeets ? "Hide Details" : "Show Details"}</button>
            {showDeets? (
                <>
                    <p>Category: {category}</p>
                    <p>Good for: ~{daysUntilExp} days</p>
                    <p>Price Estimate: {price}</p>
                    <div dangerouslySetInnerHTML={{__html: table}} />
                    <h3>Signs of Spoilage</h3>
                    <ul>{spoilageLis}</ul>
                </>
            ) : null}
        </div>
    )
}

export default FoodCard
