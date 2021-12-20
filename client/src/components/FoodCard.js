import React,{ useState, useContext } from 'react'
import { UserContext } from '../context/user'

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
    setPantryItems,
    setAdded, 
    quantity,
    unit,
    notes
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

    function handleRemove(id){
        fetch(`/user_foods/${id}`, { method: "DELETE" })
        .then(setPantryItems(pantryItems.filter(item => item.id !== id)))
    }

    const {user, setUser} = useContext(UserContext)

    function handleEaten(id){
        const moneySaved = user.money_saved + price
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                money_saved: moneySaved
            })
        })
        .then(resp => resp.json())
        .then(data => {
            handleRemove(id)
            setUser(data)
        })
    }

    return (
        <div className='doodle-border'>
            {inPantry ? <button onClick={() => handleRemove(id)} className='remove-btn'><strong>X</strong></button> : null}
            <h1>{name}</h1>
            {inPantry? (
            <>
            <p>Days Left: {daysUntilExp} days</p>
            <p>Quantity: {quantity} {unit}</p>
            <p>Notes: {notes || "None"}</p>
            </>
            ) : null}

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
            {inPantry ? (
            <>
            <button onClick={() => handleEaten(id)} className='eaten-btn'>Eaten</button>
            <button onClick={() => handleRemove(id)} className='remove-btn'>Spoiled</button>
            </>
            ) : (
            <button onClick={handleAdd}>Add to My Pantry</button>
            )}
        </div>
    )
}

export default FoodCard
