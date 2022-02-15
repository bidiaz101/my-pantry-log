import React, { useState } from 'react'

function PantryForm({ price, daysUntilExp, quantity, notes, unit }) {
    const [formData, setFormData] = useState({
        price: price,
        daysUntilExp: daysUntilExp,
        quantity: quantity,
        notes: notes
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        // fetch('/user_foods', {
        //     method: 'POST',
        //     headers: 'application/json',
        //     body: JSON.stringify({

        //     })
        // })
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
