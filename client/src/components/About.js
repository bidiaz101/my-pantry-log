import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import '../styles/About.css'

function About() {
    const {user} = useContext(UserContext)

    // Photo by Joshua Hoehne on Unsplash

    return (
        <div className='about'>
            <h2>What's this site for?</h2>
            <section className='intro'>
                <figure>
                    <img src={require("../images/rotting_apples.jpg").default} alt="Rotting apples" id='unsplash-photo' />
                    <figcaption>Photo by Joshua Hoehne on Unsplash</figcaption>
                </figure>

                <div>
                    <p>
                        According to the Natural Resources Defense Council 40% of food in the U.S. is never eaten. This is about 20 pounds of wasted food per person per month. All this wasted food ends up in landfills where it decomposes in anaerobic conditions resulting in the production of methane, a greenhouse gas 86 times more potent than carbon dioxide.
                    </p>
                    <p>
                        In addition to the wasted food, resources are also wasted in producing food that will end up in landfills including the fuel to transport food, the water to grow produce, the feed to feed livestock, etc.
                    </p>
                    <p>
                        <strong>My Pantry will help you keep track of your food, remember to use it, and show you how much money you save from having to buy that food again!</strong>
                    </p>
                </div>
            </section>

            <section className='info'>
                <h2>How do I use this site?</h2>
                <div className='section-one'>
                    <figure>
                        <img src="https://i.imgur.com/oIY4Kpu.png" alt="Food card example with table" id='fig1' />
                        <figcaption>Food card example with table</figcaption>
                    </figure>

                    <div>
                        <div>
                            <h3>How do I start tracking a food item?</h3>
                            <p>
                                Once you create an account, think of the foods that spoil most in your home. On the "All Foods" page you can find that food and click "Add to Pantry." This will open a form to edit the information about your food.
                            </p>
                        </div>
                        <div>
                            <h3>What if it doesn't cost what the site says it does?</h3>
                            <p>
                                You can edit the price, which is used to calculate how much money is saved from having to buy the food again. Your money saved only increases if you eat the foods you add to your pantry. You can also remove that food if it was added by mistake.
                            </p>
                        </div>
                    </div>

                    <div>
                        <figure>
                            <img src='https://i.imgur.com/pV6bok9.png' alt='Food card details with editing form' id='fig2' />
                            <figcaption>Food card details with editing form</figcaption>
                        </figure>
                    </div>
                </div>

                <div className='section-one-a'>
                    <div className='text-flex'>
                        <h3>What if there is no experation date?</h3>
                        <p>
                            The tables displayed in the details of each food item should be used to set the timer. You will have the option to enter a "Best By" date, but if you get anything out of this site let it be this piece of info: 
                        </p>
                    </div>
                    <figure>
                        <img src='https://i.imgur.com/qviDdBD.png' alt="How the food card will appear in the your pantry" id='fig3' />
                        <figcaption>How the food card will appear in the your pantry</figcaption>
                    </figure>
                </div>

                <h2>Expiration Dates do not say anthing about food safety!</h2> 

                <div className='section-two'>
                    <div className='section-two-a'>
                        <h3>Why do they stamp dates on food?</h3>
                        <p>
                            They are only created by manufacturers to say when they believe the food is "freshest." This date is often arbitrary. The tables will often have a column that says how long past the expiration date the food is good for, if applicable.
                        </p>
                    </div>
                    <div className='section-two-a'>
                        <h3>The timer ran out and my food is still good. What gives?!</h3>
                        <p>
                            Don't let the timer have final say of when you throw food away! There are tons of factors that go into how long food lasts. Each food item comes with signs of spoilage to look for. Reference these signs and trust your senses when determining if food is safe to eat.
                        </p>
                    </div>
                </div>
                <div className='section-three'>
                    <div>
                        <figure>
                            <img src={require('../images/STF_homepage.png').default} alt="Save the food homepage" id='fig3' />
                            <figcaption><a href='https://savethefood.com/' target='_blank' rel="noreferrer">Save the food</a> homepage</figcaption>
                        </figure>
                        <div>
                            <h3>My food is about to spoil! Help!</h3>
                            <p>
                                Once the food is within a few days of going bad, the app will link you over to a search of recipes to try that use that food. <strong>Save the Food</strong> is a website that also has recipes that use food that is close to spoiling including near sour milk, overripe avocados, black bananas, etc.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>I have food I'm sure is good, but I'm worried for being held liable if it isn't.</h3>
                            <p>
                                Legal action cannot be brought against you for the "nature, age, packaging, or condition of apparently wholesome food" according to the <a href='https://www.fns.usda.gov/tefap/information-bill-emerson-good-samaritan-food-act' target="_blank" rel="noreferrer">Bill Emerson Good Samaritan Food Donation Act</a>.
                            </p>
                        </div>
                        <figure>
                            <img src={require('../images/BillEmerson.jpg').default} alt='Bill Emerson' />
                            <figcaption>The Man Himself</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <br />
            {user.username ? <h2 className='footer'>Thanks for sticking around!</h2>  : <h2 className='footer'>Thanks for sticking around! Now go ahead and <Link to='/login'>login</Link> or <Link to='/signup'>sign up</Link> to get started!</h2>}
        </div>
    )
}

export default About