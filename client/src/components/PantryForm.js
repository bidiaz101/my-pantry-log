import React, { useState } from 'react'

function PantryForm({ id, name, price, daysUntilExp, quantity, notes, unit, pantryItems, setPantryItems, setIsEditing }) {
    const [formData, setFormData] = useState({
        price: price,
        daysUntilExp: daysUntilExp,
        quantity: quantity,
        notes: notes, 
        unit: unit
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
                notes: formData.notes,
                unit: formData.unit
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const itemIdx = pantryItems.findIndex(item => item.id === data.id)
            const newItems = [...pantryItems.slice(0, itemIdx), data, ...pantryItems.slice(itemIdx + 1)]
            setPantryItems(newItems)
            setIsEditing(false)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='price'>Your Price: </label>
            <input name='price' type='number' step="0.01" min='0' value={formData.price} onChange={handleChange}/>

            <label htmlFor='daysUntilExp'>Estimated Days Left: </label>
            <input name='daysUntilExp' min='0' type='number' value={formData.daysUntilExp} onChange={handleChange} />

            <label htmlFor='quantity' >Quantity: </label>
            <input type='number' min='0' name='quantity' value={formData.quantity} onChange={handleChange} />
            <select name='unit' value={formData.unit} onChange={handleChange}>
                <option value={name.slice(-1) === 's' ? name : name + 's'}>
                    {name.slice(-1) === 's' ? name : name + 's'}
                </option>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
                <option value="L">L</option>
                <option value='containers'>containers</option>
                <option value='gallons'>gallons</option>
            </select>

            <label htmlFor='notes' >Notes: </label>
            <br />
            <textarea name='notes' value={formData.notes} placeholder='sourdough bread, skim milk, granny smith apples, brie cheese, stored in freezer, in pantry, etc. Anything useful to future you' rows="5" cols="45" onChange={handleChange} />
            <br />

            <input type='submit' value="Save" />
        </form>
    )
}

export default PantryForm
