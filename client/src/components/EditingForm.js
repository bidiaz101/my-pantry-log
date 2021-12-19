import React from 'react'

function EditingForm({foodData, setFoodData}){

    function handleChange(e){
        setFoodData({
            ...foodData,
            user_price: e.target.value
        })
    }
    
    return (
        <form>
            <h1>{foodData.name}</h1>
            <p>Category: {foodData.category}</p>
            <label>Your Price: </label>
            <input type="number" step="0.01" min='0' value={foodData.user_price} onChange={e => handleChange(e)} />
        </form>
    )
}

{/* <p>Category: {category}</p>
                    <p>Price Estimate: ${price}</p>
                    <div dangerouslySetInnerHTML={{__html: table}} />
                    <h3>Signs of Spoilage</h3>
                    <ul>{spoilageLis}</ul> */}

export default EditingForm