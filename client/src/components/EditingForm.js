import React, { useState } from 'react'

function EditingForm({ id, name, category, price, daysUntilExp }){
    const [dateExists, setDateExists] = useState(false)
    const pluralName = name.slice(-1) === 's' ? name : name + 's'
    const [foodData, setFoodData] = useState({
        id: id,
        name: name,
        category: category,
        price: price,
        daysUntilExp: daysUntilExp,
        quantity: 1,
        unit: pluralName,
        notes: '',
        expDate: ''
    })

    function handleDate(){
        setDateExists(!dateExists)
        setFoodData({
            ...foodData,
            expDate: ''
        })
    }

    function handleChange(e){
        if(e.target.name === 'daysUntilExp'){
            setFoodData({
                ...foodData,
                [e.target.name]: parseInt(e.target.value)
            })
        } else {
            setFoodData({
                ...foodData,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        const {id, price, daysUntilExp, quantity, unit, notes} = foodData

        let daysInt
        
        if (foodData.expDate){
            const dayInMs = 86400000
            const daysFloat = (new Date(foodData.expDate).getTime() - new Date().getTime()) / dayInMs
            daysInt = Math.round(daysFloat) + daysUntilExp
        } else {
            daysInt = daysUntilExp
        }

        fetch('/user_foods', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                food_id: id,
                user_price: price,
                user_days_until_expiration: daysInt,
                quantity: quantity,
                unit: unit,
                notes: notes
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>Category: {foodData.category}</p>
            <br />
            
            <label>Your Price: </label>
            <input type="number" step="0.01" min='0' name='price' value={foodData.price} onChange={e => handleChange(e)} />
            <br />

            {dateExists ? <input type='date' name='expDate' onChange={e => handleChange(e)} /> : null}
            <button type='button' onClick={handleDate}>{dateExists ? "No exp. date" : "Enter exp. date"}</button>
            <br />

            <label>{dateExists ? "Past Printed Date" : "Shelf Life"} (in Days): </label>
            <input type='number' min='0' name='daysUntilExp' value={foodData.daysUntilExp} onChange={e => handleChange(e)} />
            <br />

            <label>Quantity: </label>
            <input type='number' min='0' name='quantity' value={foodData.quantity} onChange={e => handleChange(e)} />

            <select name='unit' onChange={e => handleChange(e)}>
                <option value={foodData.name.slice(-1) === 's' ? foodData.name : foodData.name + 's'}>
                    {foodData.name.slice(-1) === 's' ? foodData.name : foodData.name + 's'}
                </option>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
                <option value="L">L</option>
                <option value='containers'>containers</option>
                <option value='gallons'>gallons</option>
            </select>
            <br />

            <label>Notes: </label>
            <br />
            <textarea name='notes' placeholder='sourdough bread, skim milk, granny smith apples, brie cheese, stored in freezer, in pantry, etc. Anything useful to future you' rows="5" cols="45" onChange={e => handleChange(e)} />
            <br />

            <input type='submit' value='Done!' />
            {false ? <p>Successfully added to <a href='/user-foods'>My Pantry</a>!</p> : null}
        </form>
    )
}

export default EditingForm