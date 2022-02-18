import React, { useState } from 'react'

function PantryForm({ id, price, daysUntilExp, quantity, notes, unit, pantryItems, setPantryItems }) {
    const [formData, setFormData] = useState({
        price: price,
        daysUntilExp: daysUntilExp,
        quantity: quantity,
        notes: notes
    })

    function handleChange(e){
        let value

        if(e.target.name === 'daysUntilExp' || e.target.name === 'quantity'){
            value = parseInt(e.target.value)
        } else if (e.target.name === 'price') {
            value = parseFloat(e.target.value)
        } else {
            value = e.target.value
        }

        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/user_foods/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_price: formData.price,
                user_days_until_expiration: formData.daysUntilExp,
                quantity: formData.quantity,
                notes: formData.notes
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data, pantryItems))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='price'>Your Price: </label>
            <input name='price' type='number' step="0.01" min='0' value={formData.price} onChange={handleChange}/>

            <label htmlFor='daysUntilExp'>Estimated Days Left: </label>
            <input name='daysUntilExp' min='0' type='number' value={formData.daysUntilExp} onChange={handleChange} />

            <label htmlFor='quantity' >Quantity: </label>
            <input type='number' min='0' name='quantity' value={formData.quantity} onChange={handleChange} />
            <p>{unit}</p>

            <label htmlFor='notes' >Notes: </label>
            <br />
            <textarea name='notes' value={formData.notes} placeholder='sourdough bread, skim milk, granny smith apples, brie cheese, stored in freezer, in pantry, etc. Anything useful to future you' rows="5" cols="45" onChange={handleChange} />
            <br />

            <input type='submit' value="Save" />
        </form>
    )
}

export default PantryForm
