import React,{ useState, useContext } from 'react'
import { UserContext } from '../context/user'
import PantryForm from './PantryForm'

function PantryCard({
    id,
    name,
    category,
    price,
    table,
    spoilage,
    pantryItems,
    setPantryItems,
    quantity,
    unit,
    notes,
    daysUntilExp
}){
    const [showDeets, setShowDeets] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

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

    let divId
    let divWidth

    if(daysUntilExp > 14){
        divId = 'bar-good'
        divWidth = 100
    } else if(daysUntilExp <=14 && daysUntilExp >= 10){
        divId = 'bar-good'
    } else if(daysUntilExp < 10 && daysUntilExp > 4){
        divId = 'bar-warning'
    } else {
        divId = 'bar-bad'
    }

    return (
        <div className='doodle-border'>
            <button onClick={() => handleRemove(id)} className='remove-btn'><strong>X</strong></button>
            <h1>{name}</h1>
            {isEditing ? (
                <PantryForm 
                    id={id}
                    name={name}
                    price={price} 
                    daysUntilExp={daysUntilExp} 
                    quantity={quantity} 
                    notes={notes} 
                    unit={unit} 
                    pantryItems={pantryItems}
                    setPantryItems={setPantryItems}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <>
                    <p>Days Left: {daysUntilExp} days</p>
                    <div id="counter-bar">
                        <div id={divId} style={{width: (divWidth || ((daysUntilExp/14) * 100)) + '%'}} />
                    </div>
                    <p>Quantity: {quantity} {unit}</p>
                    <p>Notes: {notes || "None"}</p>
                    {divId !== 'bar-good' ? <p>I need a <a href={`https://www.allrecipes.com/search/results/?search=${name}`} target='_blank' rel="noreferrer" >recipe</a>!</p> : null}
                </>
            )}

            <button onClick={() => setShowDeets(!showDeets)}>{showDeets ? "Hide Details" : "Show Details"}</button>
            <hr />
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
            <button onClick={() => handleEaten(id)} className='eaten-btn'>Eaten</button>
            {isEditing ? null : <button onClick={() => setIsEditing(!isEditing)}>Edit</button>}
            <button onClick={() => handleRemove(id)} className='remove-btn'>Spoiled</button>
        </div>
    )
}

export default PantryCard

// Pantry props
// 
// id={item.id}
// name={name} 
// category={category} 
// price={item.user_price} 
// table={item.food.description} 
// spoilage={item.food.signs_of_spoilage} 
// inPantry={true} 
// key={item.id}
// pantryItems={pantryItems}
// setPantryItems={setPantryItems}
// quantity={item.quantity}
// unit={item.unit}
// notes={item.notes}
// daysUntilExp={item.user_days_until_expiration}

// All Food props
// 
// id={food.id}
// name={food.name} 
// daysUntilExp={food.days_until_expiration} 
// category={food.category}
// table={food.description}
// price={food.price}
// spoilage={food.signs_of_spoilage}
// setShowForm={setShowForm}
// setFoodData={setFoodData}
// key={food.id}
// setAdded={setAdded}