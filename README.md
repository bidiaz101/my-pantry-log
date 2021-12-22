# My Pantry - Preventing Food Waste

My Pantry is an app intended to help users remember to use food tehy buy to prevent food waste.

## Background
According to the Natural Resources Defense Council 40% of food in the U.S. is never eaten. This is about 20 pounds of wasted food per person per month. All this wasted food ends up in landfills where it decomposes in anaerobic conditions resulting in the production of methane, a greenhouse gas 86 times more potent than carbon dioxide.

In addition to the wasted food resources are also wasted in producing food that will end up in landfills including the fuel to transport food, the water to grow produce, the feed to feed livestock, etc. 
![Infographic](/wasted-2017-infographic.jpg)

This app intends to spead awareness about food waste and incentivize users to keep track of food that they buy.

<!-- Bill emerson good samaritan food donation act -->

## Features
Users can log expiration dates of foods at risk of spoilage. The app will have foods that the user can put in their digital pantry/refrigerator and note the quantity. 

The app will count down the days until the food spoils based on the typical amount of time that food takes to spoil. 
Users can edit this timer before or after they save it. Each food item has a table displaying how long food is good under different conditions (room-temp., refrigerated, frozen, etc.). Users can edit based on that table. 
One thing the app makes clear is once the user looks at the table is that **Use By dates on food are not useful for determining if food is safe to eat.** They are merely created by the manufacturer to say when the food can be considered its "freshest." Food is often good well past its expiration date. The tables in the app will often have a "Good Past Printed Date" column if applicable.

If the timer is inaccurate, the food will come with signs of spoilage to look for. If a user if 
unsure how to use a food that is about to spoil they will be able to click on a link 
that will take them to a page full of recipes that include that ingredient. The user than then delete food 
from their pantry if they have eaten it or if, perish the thought, it spoils... 😓

A score will be kept and as a user eats food, the app will let them know how much money they have saved. 
The price of their food items may vary as well so, if the user wishes, they can update 
the price of their items as well. This score is intended to motivated users to remember to use food they buy.

My app will link over to [allrecipes.com](https://www.allrecipes.com/) with their food item as the search query, but the home page will link over to [savethefood.com](https://savethefood.com/) which has useful recipes for black bananas, overripe avocados, etc. 

If any users run restuarants or have access to large quantities of food that they cannot sell, the site will also have info on the [Bill Emerson Good Samaritan Food Donation Act](https://www.fns.usda.gov/tefap/information-bill-emerson-good-samaritan-food-act) which states a food donor cannot be held legally liable for the "nature, age, packaging, or condition of apparently wholesome food."

My Pantry Log uses a React frontend, Ruby on Rails for the backend, and Postgresql 
for creating the relational database.

For suggestions on how to improve the application contact me at bidiaz101@gmail.com
