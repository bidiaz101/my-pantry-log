import React from 'react'

function EditingForm({foodData, setFoodData, added, setAdded}){

    function handleChange(e){
        setFoodData({
            ...foodData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        const {id, price, daysUntilExp, quantity, unit, notes} = foodData

        fetch('/user_foods', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                food_id: id,
                user_price: price,
                user_days_until_expiration: daysUntilExp,
                quantity: quantity,
                unit: unit,
                notes: notes
            })
        })
        .then(setAdded(true))
    }
    
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <h1>{foodData.name}</h1>
            <p>Category: {foodData.category}</p>
            <br />
            <label>Your Price: </label>
            <input type="number" step="0.01" min='0' name='price' value={foodData.price} onChange={e => handleChange(e)} />
            <br />
            {/* add way to add expDate and calc how many days from today until then */}
            <label>Days Left to Eat: </label>
            <input type='number' min='0' name='daysUntilExp' value={foodData.daysUntilExp} onChange={e => handleChange(e)} />
            <br />
            <label>Quantity: </label>
            <input type='number' min='0' name='quantity' value={foodData.quantity} onChange={e => handleChange(e)} />
            <label>Units: </label>
            <select name='unit' onChange={e => handleChange(e)}>
                <option value={foodData.name + 's'}>{foodData.name + 's'}</option>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
                <option value="L">L</option>
                <option value='containers'>containers</option>
                <option value='gallons'>gallons</option>
            </select>
            <br />
            <label>Notes: </label>
            <textarea name='notes' placeholder='Maybe note the type of food (sourdough bread, skim milk, granny smith apples, brie cheese, etc.). Anything future you might find helpful when checking if the food is still good.' rows="5" cols="40" onChange={e => handleChange(e)} />
            <br />
            <input type='submit' value='Done!' />
            {added? <p>Successfully added to <a href='/my-pantry'>My Pantry</a>!</p> : null}
        </form>
    )
}

export default EditingForm