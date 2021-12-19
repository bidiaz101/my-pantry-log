import React,{ useState } from 'react'

function FoodCard({ id, name, category, daysUntilExp, table, price, spoilage, setShowForm, setFoodData }) {
    const [showDeets, setShowDeets] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

    function handleAdd(){
        setShowForm(true)
        setFoodData({
            name: name,
            category: category,
            signs_of_spoilage: spoilage,
            user_price: price
        })
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setShowDeets(!showDeets)}>{showDeets ? "Hide Details" : "Show Details"}</button>
            {showDeets? (
                <>
                    <p>Category: {category}</p>
                    <p>Price Estimate: ${price}</p>
                    <div dangerouslySetInnerHTML={{__html: table}} />
                    <h3>Signs of Spoilage</h3>
                    <ul>{spoilageLis}</ul>
                </>
            ) : null}
            <br />
            <button onClick={handleAdd}>Add to My Pantry</button>
            <hr />
        </div>
    )
}

export default FoodCard
