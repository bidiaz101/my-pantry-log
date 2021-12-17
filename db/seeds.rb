require 'open-uri'
require 'nokogiri'

puts "Seeding DB..."

# Make column in users of last time they logged in

def scrape_table(url)
  html = URI.open(url)
  doc = Nokogiri::HTML(html)
  doc.css('#unopened')
end

Food.create(
  [
    {
        name: "Cottage Cheese",
        days_until_expiration: 7,
        category: 'Dairy',
        signs_of_spoilage: ['Damp odor', 'Yellow color', 'Sour taste', 'Pockets of water'],
        price: 2.75,
        description: scrape_table("http://www.eatbydate.com/dairy/cheese/cottage-cheese-shelf-life-expiration-date/")
    },
    {
        name: 'Cheese',
        days_until_expiration: 14,
        category: 'Dairy',
        signs_of_spoilage: ['Mold', 'Darker color', 'Harder texture', 'Stronger smell'],
        price: 2.86,
        description: scrape_table("http://www.eatbydate.com/dairy/cheese/cheese-shelf-life-expiration-date/")
    },
    {
        name: 'Sour Cream',
        days_until_expiration: 7,
        category: 'Dairy',
        signs_of_spoilage: ['Dark mold', 'Pockets of liquid', 'Bitter flavor'],
        price: 1.03,
        description: scrape_table("http://www.eatbydate.com/dairy/sour-cream-shelf-life-expiration-date/")
    },
    {
        name: 'Cream Cheese',
        days_until_expiration: 7,
        category: 'Dairy',
        signs_of_spoilage: ['Sour taste', 'Sour smell', 'Cracked, lumpy texture'],
        price: 1.71,
        description: scrape_table("http://www.eatbydate.com/dairy/cheese/cream-cheese-shelf-life-expiration-date/")
    },
    {
        name: 'Eggs',
        days_until_expiration: 21,
        category: 'Protein',
        signs_of_spoilage: ['Cloudy or oddly colored "whites"', 'Rotten smell'],
        price: 4.43,
        description: scrape_table("http://www.eatbydate.com/eggs-shelf-life-expiration-date/")
    },
    {
        name: 'Milk',
        days_until_expiration: 5,
        category: 'Dairy',
        signs_of_spoilage: ['Discoloration', 'Lumpy', 'Sour odor'],
        price: 5.85,
        description: scrape_table("http://www.eatbydate.com/dairy/milk/milk-shelf-life-expiration-date/")
    },
    {
        name: "Butter", 
        days_until_expiration: 14,
        category: "Dairy",
        signs_of_spoilage: ['Pale color', 'Mold', 'Change in texture' 'Stale, cheesy, or decomposing smell'],
        price: 4.10,
        description: scrape_table("http://www.eatbydate.com/dairy/spreads/butter-shelf-life-expiration-date/")
    },
    {
        name: 'Yogurt',
        days_until_expiration: 14,
        category: "Dairy",
        signs_of_spoilage: ['Lumpy texture', 'Mold'],
        price: 4.31,
        description: scrape_table("http://www.eatbydate.com/dairy/yogurt-shelf-life-expiration-date/")
    },
    {
        name: 'Fruit Juice',
        days_until_expiration: 14,
        category: 'Beverage',
        signs_of_spoilage: ['Discoloration', 'Sour smell', 'Mold'],
        price: 4.82,
        description: scrape_table("http://www.eatbydate.com/drinks/fruit-juice-shelf-life-expiration-date/")
    },
    {
        name: 'Egg Nog',
        days_until_expiration: 5,
        category: "Dairy",
        signs_of_spoilage: ['Discoloration', "Lumpy texture", "Sour smell"],
        price: 4.41,
        description: scrape_table("http://www.eatbydate.com/dairy/milk/how-long-does-egg-nog-last-shelf-life-expiration-date/")
    },
    {
        name: "Avocado",
        days_until_expiration: 3,
        category: "Fruit",
        signs_of_spoilage: ['Black flesh', 'Excessivly soft'],
        price: 1.82,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/how-long-do-avocados-last-shelf-life-expiration-date/")
    },
    {
        name: 'Apple',
        days_until_expiration: 7,
        category: 'Fruit',
        signs_of_spoilage: ['Grainy, soft interior', 'Wrinkled skin', 'Discoloration', 'Mold'],
        price: 0.82,
        description: scrape_table("https://www.eatbydate.com/fruits/fresh/apples-shelf-life-expiration-date/")
    },
    {
        name: 'Banana',
        days_until_expiration: 7,
        category: 'Fruit',
        signs_of_spoilage: ['Turning black', 'Leaking liquid', 'Mold'],
        price: 0.82,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/bananas-shelf-life-expiration-date/")
    },
    {
        name: "Blueberries",
        days_until_expiration: 5,
        category: 'Fruit',
        signs_of_spoilage: ['Mushy texture', 'Discoloration', 'Bruising', 'Mold'],
        price: 4.92,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/blueberries/")
    },
    {
        name: "Grapes",
        days_until_expiration: 5,
        category: "Fruit",
        signs_of_spoilage: ['Soft texture', 'Discoloration', 'Vinegar-like odor', 'Mold'],
        price: 7.06,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/grapes/")
    },
    {
        name: "Lemons",
        days_until_expiration: 14,
        category: "Fruit",
        signs_of_spoilage: ['Soft texture', 'Discoloration', 'Soft spots', 'Mold'],
        price: 3.38,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/how-long-do-lemons-last/")
    },
    {
        name: "Oranges",
        days_until_expiration: 14,
        category: "Fruit",
        signs_of_spoilage: ['Soft texture', 'Discoloration', 'Soft spots', 'Mold'],
        price: 0.99,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/how-long-do-oranges-last-shelf-life-expiration-date/")
    },
    {
        name: "Tomatoes",
        days_until_expiration: 14,
        category: "Fruit",
        signs_of_spoilage: ['Soft texture', 'Discoloration', 'Soft spots', 'Mold'],
        price: 0.98,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/tomatoes-shelf-life-expiration-date/")
    },
    {
        name: "Strawberries",
        days_until_expiration: 14,
        category: "Fruit",
        signs_of_spoilage: ['Soft texture', 'Discoloration', 'Soft spots', 'Mold'],
        price: 6.21,
        description: scrape_table("http://www.eatbydate.com/fruits/fresh/how-long-do-strawberries-last/")
    },
    {
        name: "Bread",
        days_until_expiration: 14,
        category: "Grains",
        signs_of_spoilage: ['Foul odor', 'Mold'],
        price: 2.14,
        description: scrape_table("http://www.eatbydate.com/grains/baked-goods/bread-shelf-life-expiration-date/")
    },
    {
        name: "Tortillas",
        days_until_expiration: 7,
        category: "Grains",
        signs_of_spoilage: ['Stiffening', 'Mold'],
        price: 2.14,
        description: scrape_table("http://www.eatbydate.com/grains/baked-goods/how-long-do-tortillas-last-shelf-life-expiration-date/")
    },
    {
        name: "Oil",
        days_until_expiration: 7,
        category: "Other",
        signs_of_spoilage: ['Rancid odor', 'Wine-like odor'],
        price: 10.78,
        description: scrape_table("http://www.eatbydate.com/other/condiments/how-long-does-oil-last/")
    },
    {
        name: "Spaghetti Sauce",
        days_until_expiration: 7,
        category: "Other",
        signs_of_spoilage: ['Mold'],
        price: 2.04,
        description: scrape_table("https://www.eatbydate.com/vegetables/fresh-vegetables/spaghetti-sauce-shelf-life-expiration-date/")
    },
    {
        name: "Honey",
        days_until_expiration: 10000,
        category: "Other",
        signs_of_spoilage: [],
        price: 7.91,
        description: "<p>Honey can last for forever. To liquify crystallized honey the container can be placed in hot water or microwaved if the container is microwave safe.</p>"
    },
    {
        name: "Jam",
        days_until_expiration: 365,
        category: "Other",
        signs_of_spoilage: ['Liquid forming', "change in texture and color", "Unusual odor", "Mold"],
        price: 3.14,
        description: scrape_table("http://www.eatbydate.com/other/condiments/how-long-does-jam-last-shelf-life-expiration-date/")
    },
    {
        name: "Beef",
        days_until_expiration: 2,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour odor', 'brown or gray color'],
        price: 22.09,
        description: scrape_table("http://www.eatbydate.com/proteins/meats/beef-shelf-life-expiration-date/")
    },
    {
        
        name: "Bacon",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour odor', 'brown or gray color'],
        price: 5.14,
        description: scrape_table("http://www.eatbydate.com/proteins/meats/bacon-shelf-life-expiration-date/")
    },
    {
        
        name: "Ham",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour odor', 'brown or gray color'],
        price: 21.96,
        description: scrape_table("http://www.eatbydate.com/proteins/meats/ham-shelf-life-expiration-date/")
    },
    {
        
        name: "Pork",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour odor', 'brown or gray color'],
        price: 7.66,
        description: scrape_table("http://www.eatbydate.com/proteins/meats/how-long-does-pork-last/")
    },
    {
        name: 'Beans',
        days_until_expiration: 2,
        category: 'Protein',
        signs_of_spoilage: ['brown spots', 'soft texture', 'shrunken', 'foul odor', 'mold'],
        price: 1.15,
        description: scrape_table("http://www.eatbydate.com/proteins/beans-peas/beans-shelf-life-expiration-date/")
    },
    {
        
        name: "Chicken",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour smell'],
        price: 13.71,
        description: scrape_table("http://www.eatbydate.com/proteins/poultry/how-long-does-chicken-last-shelf-life-expiration-date/")
    },
    {
        
        name: "Tofu",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Tan color', 'Sour smell'],
        price: 3.07,
        description: scrape_table("http://www.eatbydate.com/proteins/beans-peas/how-long-does-tofu-last-shelf-life/")
    },
    {
        
        name: "Turkey",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Dull, slimy flesh', 'Sour smell'],
        price: 16.32,
        description: scrape_table("http://www.eatbydate.com/proteins/poultry/turkey-shelf-life-expiration-date/")
    },
    {
        
        name: "Fish",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Slimy, milky flesh', 'Rancid odor'],
        price: 7.18,
        description: scrape_table("http://www.eatbydate.com/proteins/seafood/fish-shelf-life-expiration-date/")
    },
    {
        
        name: "Deli Meat",
        days_until_expiration: 7,
        category: "Protein",
        signs_of_spoilage: ['Slimy, milky flesh', 'Rancid odor'],
        price: 8.72,
        description: scrape_table("http://www.eatbydate.com/proteins/meats/deli-meat-shelf-life-expiration-date/")
    },
    {
        
        name: "Broccoli",
        days_until_expiration: 7,
        category: "Vegetable",
        signs_of_spoilage: ['Foul odor', "Change in color", 'Limp texture'],
        price: 5.13,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/broccoli/")
    },
    {
        
        name: "Celery",
        days_until_expiration: 28,
        category: "Vegetable",
        signs_of_spoilage: ['Mushy, slimy texture'],
        price: 2.04,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/how-long-does-celery-last-shelf-life/")
    },
    {
        
        name: "Carrots",
        days_until_expiration: 28,
        category: "Vegetable",
        signs_of_spoilage: ['Mushy, slimy texture'],
        price: 2.04,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/how-long-do-carrots-last-shelf-life/")
    },
    {
        
        name: "Lettuce",
        days_until_expiration: 7,
        category: "Vegetable",
        signs_of_spoilage: ['Mushy, slimy texture', 'Discoloration', 'Rotten smell'],
        price: 2.97,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/how-long-does-lettuce-last/")
    },
    {
        name: "Potatoes",
        days_until_expiration: 28,
        category: "Vegetable",
        signs_of_spoilage: ['Soft texture', 'Withered appearance', "Sour Odor", 'Mold'],
        price: 4.10,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/potatoes-shelf-life-expiration-date/")
    },
    {
        name: "Cucumbers",
        days_until_expiration: 7,
        category: "Vegetable",
        signs_of_spoilage: ['Slimy surface', "Mushy texture"],
        price: 2.55,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/how-long-do-cucumbers-last-shelf-life-expiration-date/")
    },
    {
        name: "Onions",
        days_until_expiration: 28,
        category: "Vegetable",
        signs_of_spoilage: ['Black spots', 'Soft spots', 'Mold'],
        price: 2.55,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/how-long-do-onions-last-shelf-life/")
    },
    {
        name: "Mushrooms",
        days_until_expiration: 7,
        category: "Vegetable",
        signs_of_spoilage: ['Sticky, slimy surface', 'Darker color change', 'Mushy texture'],
        price: 6.66,
        description: scrape_table("http://www.eatbydate.com/vegetables/fresh-vegetables/mushrooms/")
    },
  ]
)

puts "\\m/ Done seeding \\m/"