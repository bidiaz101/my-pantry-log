import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'

function About() {
    const {user} = useContext(UserContext)

    return (
        <>
        <h1>My Pantry</h1>
        <p>According to the Natural Resources Defense Council 40% of food in the U.S. is never eaten. This is about 20 pounds of wasted food per person per month. All this wasted food ends up in landfills where it decomposes in anaerobic conditions resulting in the production of methane, a greenhouse gas 86 times more potent than carbon dioxide.

        In addition to the wasted food resources are also wasted in producing food that will end up in landfills including the fuel to transport food, the water to grow produce, the feed to feed livestock, etc. 
        <br />
        <br />
        <strong>My Pantry will help you keep track of your food, remember to use it, and show you how much money you save from having to buy that food again!</strong></p>
        <hr />
        <h2>How do I use this site?</h2>
        <p>Once you create an account, think of the foods that spoil most in your home because you forget about it. On the "All Foods" page you can find that food and click "Add to Pantry." This will open a form to edit the information about your food.</p>

        <figure>
            <img src="https://i.imgur.com/oIY4Kpu.png" alt="Food card example with table" id='fig1' />
            <figcaption>Food card example with table</figcaption>
        </figure>

        <p>You can edit the price, which is used to calculate how much money is saved from having to buy the food again. Your money saved only increases if you eat the foods you add to your pantry. You can also remove that food if it wass added by mistake.</p>

        <figure>
            <img src='https://i.imgur.com/pV6bok9.png' alt='Food card details with editing form' id='fig2' />
            <figcaption>Food card details with editing form</figcaption>
        </figure>

        <p>The tables displayed in the details of each food item should be used to set the timer. You will have the option to enter a "Best By" date, but if you get anything out of this site let it be this piece of info: </p>
        <h3>Expiration Dates do not say anthing about food safety!</h3> 
        <p>They are only created by manufacturers to say when they believe the food is "freshest." This date is often arbitrary. The tables will often have a column that says how long past the expiration date the food is good for, if applicable.</p>
        <p>Don't let the timer have final say of when you throw food away! Each food item comes with signs of spoilage to look for! Reference these signs and trust your senses when determining if food is safe to eat.</p>

        <figure>
            <img src='https://i.imgur.com/qviDdBD.png' alt="How the food card will appear in the your pantry" id='fig3' />
            <figcaption>How the food card will appear in the your pantry</figcaption>
        </figure>

        <p>Once the food is within a few days of going bad, the app will link you over to a search of recipes to try that use that food. <a href='https://savethefood.com/' target='_blank' rel="noreferrer">Save the food</a> is a website that also has recipes that use food that is close to spoiling including near sour milk, overripe avocados, black bananas, etc.</p>
        <p><strong>If you own a restuarant or have access to large quantities of food</strong> legal action cannot be brought against you for the "nature, age, packaging, or condition of apparently wholesome food" according to the <a href='https://www.fns.usda.gov/tefap/information-bill-emerson-good-samaritan-food-act' target="_blank" rel="noreferrer">Bill Emerson Good Samaritan Food Donation Act</a>.</p>
        <br />
        {user.username ? <p>Thanks for sticking around!</p>  : <p>Thanks for sticking around! Now go ahead and <Link to='/login'>login</Link> or <Link to='/signup'>sign up</Link> to get started!</p>}
        </>
    )
}

export default About