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
    inPantry=false, 
    pantryItems,
    setPantryItems 
}) {
    const [showDeets, setShowDeets] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

    function handleAdd(){
        setShowForm(true)
        setFoodData({
            id: id,
            name: name,
            category: category,
            price: price,
            daysUntilExp: daysUntilExp,
            quantity: 1,
            unit: name + 's',
            notes: ''
        })
    }

    function handleRemove(id){
        fetch(`/user_foods/${id}`, { method: "DELETE" })
        .then(setPantryItems(pantryItems.filter(item => item.id !== id)))
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setShowDeets(!showDeets)}>{showDeets ? "Hide Details" : "Show Details"}</button>
            {showDeets? (
                <>
                    <p>Category: {category}</p>
                    <p>Price{inPantry ? null : " Estimate"}: ${price}</p>
                    <div dangerouslySetInnerHTML={{__html: table}} />
                    <h3>Signs of Spoilage</h3>
                    <ul>{spoilageLis}</ul>
                </>
            ) : null}
            <br />
            {inPantry ? <button onClick={() => handleRemove(id)}>Remove from My Pantry</button> : <button onClick={handleAdd}>Add to My Pantry</button>}
            <hr />
        </div>
    )
}

export default FoodCard
