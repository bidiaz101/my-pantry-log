import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'

function AllFoods() {
    const [foods, setFoods] = useState([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    const [foodData, setFoodData] = useState({
        id: 0,
        name: '',
        category: '',
        price: 0,
        daysUntilExp: 0,
        quantity: 0,
        units: '',
        notes: '',
        expDate: ''
    })
    const [added, setAdded] = useState(false)

    useEffect(() => {
        fetch('/foods')
        .then(resp => resp.json())
        .then(data => setFoods(data))
    }, [])

    const foodsToDisplay = foods.filter(food => {
        return food.category.includes(filter)
    }).filter(food => {
        return food.name.toLowerCase().includes(search)
    }).map(food => {
        return (
            <FoodCard 
                id={food.id}
                name={food.name} 
                daysUntilExp={food.days_until_expiration} 
                category={food.category}
                table={food.description}
                price={food.price}
                spoilage={food.signs_of_spoilage}
                setFoodData={setFoodData}
                key={food.id}
                setAdded={setAdded}
            />
        )
    })

    return (
        <div>
            <div>
                <div className='food-controls'>
                    <label>Search: </label>
                    <input type='text' onChange={e => setSearch(e.target.value.toLowerCase())}/>
                    <br />
                    <label>Filter by Category: </label>
                    <select name="category-filter" onChange={(e) => setFilter(e.target.value)} >
                        <option value="">All</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Protein">Protein</option>
                        <option value="Fruit">Fruits</option>
                        <option value="Vegetable">Vegetables</option>
                        <option value="Beverage">Beverages</option>
                        <option value="Grains">Grains</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <hr />
                <div className='grid-container'>
                    {foodsToDisplay}
                </div>
            </div>
        </div>
    )
}

export default AllFoods
