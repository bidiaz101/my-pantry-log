import React,{ useState } from 'react'
import EditingForm from './EditingForm'

function FoodCard({ 
    id, 
    name, 
    category, 
    daysUntilExp, 
    table, 
    price, 
    spoilage
}) {
    const [showDeets, setShowDeets] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const spoilageLis = spoilage.split(', ').map(item => {
        if(!item) return <li key="honey">Never spoils</li>

        const newItem = item.replace(item[0], item[0].toUpperCase())
        return <li key={item}>{newItem}</li>
    })

    return (
        <div className='doodle-border'>
            <h1>{name}</h1>

            {isEditing? (
                <>
                <EditingForm 
                    id={id} 
                    name={name} 
                    category={category} 
                    price={price} 
                    daysUntilExp={daysUntilExp}
                />
                <hr/>
                </>
            ) : null}

            {isEditing? null : <button onClick={() => setIsEditing(true)}>Add to My Pantry</button>}

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
        </div>
    )
}

export default FoodCard
