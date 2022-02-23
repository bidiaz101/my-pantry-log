import React,{ useState } from 'react'

function FoodCard({ 
    id, 
    name, 
    category, 
    daysUntilExp, 
    table, 
    price, 
    spoilage, 
    setShowForm, 
    setFoodData,
    setAdded
}) {
    const [showDeets, setShowDeets] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

    function handleAdd(){
        setAdded(false)
        setShowForm(true)
        setShowDeets(true)
        setFoodData({
            id: id,
            name: name,
            category: category,
            price: price,
            daysUntilExp: daysUntilExp,
            quantity: 1,
            unit: name.slice(-1) === 's' ? name : name + 's',
            notes: '',
            expDate: ''
        })
    }

    return (
        <div className='doodle-border'>
            <h1>{name}</h1>

            <button onClick={() => setShowDeets(!showDeets)}>{showDeets ? "Hide Details" : "Show Details"}</button>
            {showDeets? (
            <>
            <p>Category: {category}</p>
            <p>Price Estimate: ${price}</p>
            <div dangerouslySetInnerHTML={{__html: table}} />
            <h3>Signs of Spoilage</h3>
            <ul>{spoilageLis}</ul>
            <hr />
            </>
            ) : null}
            <br />
            <button onClick={handleAdd}>Add to My Pantry</button>
        </div>
    )
}

export default FoodCard
