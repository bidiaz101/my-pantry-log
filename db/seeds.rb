puts "Seeding DB..."
# {
    # name: 
    # days_until_expiration:
    # type:
    # signs_of_spoilage:
    # price:
    # description: 
# }

# Make column in users of last time they logged in

Food.create(
  [
    {
        name: "Cottage Cheese",
        days_until_expiration: 7,
        type: 'Dairy',
        signs_of_spoilage: ['Damp odor', 'Yellow color', 'Sour taste', 'Pockets of water'],
        price: 2.75,
        description: "Cottage cheese should be refrigerated. It can be frozen to be kept for longer, but this will result in a separated, less flavorful product."
    },
    {
        name: 'Cheese',
        days_until_expiration: 14,
        type: 'Dairy',
        signs_of_spoilage: ['Mold', 'Darker color', 'Harder texture', 'Stronger smell'],
        price: 2.86,
        description: 'There can be a great deal of variation in how long cheese is stored. Hard cheeses, like parmesan, romano, or asiago, store for longer than soft cheeses, like brie. 2 weeks is usually how long sliced semi-hard cheese stores for in the refrigerator. Hard cheeses and semi-hard cheeses store for about 3-4 weeks if stored as a block. If the cheese is still sealed, cheese blocks can store for about 1-4 months depending on how hard the cheese is. Adjust expiration date accordingly.'
    },
    {
        name: 'Sour Cream',
        days_until_expiration: 7,
        type: 'Dairy',
        signs_of_spoilage: ['Dark mold', 'Pockets of liquid', 'Bitter flavor'],
        price: 1.03,
        description: 'Sour cream should be refrigerated. Frozen sour cream will result in lumpy texture and a loss of flavor once thawed.'
    },
    {
        name: 'Cream Cheese',
        days_until_expiration: 7,
        type: 'Dairy',
        signs_of_spoilage: ['Sour taste', 'Sour smell', 'Cracked, lumpy texture'],
        price: 1.71,
        description: 'Most cream cheese is sold in a foil that cannot be resealed. To help it keep for longer it is recommended that it is placed in an airtight container or resealable bag. Freexing cream cheese is not recommended as it will result in a crumbly cheese. One week is the fastest cream cheese will spoil past the "best by" date, but can last as long as 3-4 weeks.'
    },
    {
        name: 'Eggs',
        days_until_expiration: 21,
        type: 'Protein',
        signs_of_spoilage: ['Cloudy or oddly colored "whites"', 'Rotten smell'],
        price: 4.43,
        description: 'Samonella and E.coli pose health risks when eating undercooked or spoiled eggs. Partially cooked eggs are safer to eat when they have been pasteurized.'
    },
    {
        name: 'Milk',
        days_until_expiration: 5,
        type: 'Dairy',
        signs_of_spoilage: ['Discoloration', 'Lumpy', 'Sour odor'],
        price: 5.85,
        description: 'The "eat by" date printed on milk is fairly reliable.' 
    },
    {
        name: "Butter", 
        days_until_expiration: 14,
        type: "Dairy",
        signs_of_spoilage: ['Pale color', 'Mold', 'Change in texture' 'Stale, cheesy, or decomposing smell'],
        price: 4.10,
        description: 'Unopened butter can keep for about one month past the expiration date. Opened it can last for two weeks.'
    },
    {
        name: 'Yogurt',
        days_until_expiration: 14,
        type: "Dairy",
        signs_of_spoilage: ['Lumpy texture', 'Mold'],
        price: 4.31,
        description: 'Frozen yogurt can last 2-3 months past the expiration date. Drinkable refrigerated yogurt lasts for 7-10 days past the date. Refrigerated greek yogurt last for 1-2 weeks past the date. Opened yogurt should be eaten within a week.'
    },
    {
        name: 'Fruit Juice',
        days_until_expiration: 14,
        type: 'Beverage',
        signs_of_spoilage: ['Discoloration', 'Sour smell', 'Mold'],
        price: 4.82,
        description: 'The time it takes for fruit juice to spoil can vary wildly depending on if it is canned concentrate, if it is fresh squeezed, or bottled from a large manufacturer. Fresh juices should be consumed within a week. Many bottled juices can last in the refrigerator for 1-3 months, with orange juice as the exception. It can last for 2-3 weeks in the refrigerator. Frozen fruit juice concentrate can last for 6-9 months. Juice should be consumed within two weeks once opened.'
    },
    {
        name: 'Egg Nog',
        days_until_expiration: 5,
        type: "Beverage",
        signs_of_spoilage: ['Discoloration', "Lumpy texture", "Sour smell"],
        price: 4.41,
        description: "Canned eggnog can last 4-5 months in the refrigerator. Once opened, eggnog lasts for about 5 days."
    },
    {
        name: "Avocado",
        days_until_expiration: 3,
        type: "Fruit",
        signs_of_spoilage: ['Black flesh', 'Excessivly soft'],
        price: 1.82,
        description: 'Avocados become ripe when the fruit gives slightly when pressed. Once ripe, can last for about 3-4 days at room temperature and about 7-10 days in the refrigerator.'
    },
    {
        name: 'Banana'
        days_until_expiration:
        type: 'Fruit'
        signs_of_spoilage:
        price:
        description: 
    },
    {
        name: 'Beans',
        days_until_expiration: 2,
        type: 'produce',
        signs_of_spoilage: ['brown spots', 'soft texture', 'shrunken', 'foul odor', 'mold'],
        price: 1.15,
        description: 'Bean expiration dates can vary greatly depending on whether they are canned, dried, or fresh. Dried beans last indefinitely, canned beans last about a year, and fresh beans should be used within the week. Be sure to edit the expiration date accordingly.'
    },
    {
        name: 'Kale',
        days_until_expiration: 14, 
        type: 'produce',
        signs_of_spoilage: ['wilting', 'slimy', 'discoloration', 'unusual odor'],
        price: 2.97,
        description: "Bagged kale keeps for a day or two past the printed date, and up to 5 days of opening the bag, while fresh kale lasts about 5 to 7 days. To maximize the shelf life, store kale in the fridge in a plastic bag, and postpone washing it until you're ready to eat it. Fresh kale will last up to one week in the fridge. Kale in a bag can last up to two weeks in the refrigerator."
    },
    {
        name: 'Potato',
        days_until_expiration: 14,
        type: 'produce',
        signs_of_spoilage: ['dryness and shrinkage', 'mushy', 'foul odor', 'mold'],
        price: 4.09,
        description: 'Should be stored in a cool, dark, well-ventilated area. Sprouts are not a sign of spoilage. Sunlight causes green spots on potatoes and also do not indicate spoilage. Sprouts, green spots, dark spots, and bruises can all be cut off from potatoes and they can be used normally. Potatoes can be stored for about 2 weeks at room temperature and 3 or 4 weeks in the fridge.'
    },
    {
        name: 'Tomato',
        days_until_expiration:
        type: 'produce'
        signs_of_spoilage:
        price:
        description: 
    },
    {
        name: 'Lamb',
        days_until_expiration:
        type: 'protein'
        signs_of_spoilage:
        price:
        description: 
    },
    {
        name: 'Chicken',
        days_until_expiration:
        type: 'protein'
        signs_of_spoilage:
        price:
        description: 
    },
    {
        name: 'Turkey',
        days_until_expiration:
        type: 'protein'
        signs_of_spoilage:
        price:
        description: 
    }

  ]
)

puts "\\m/ Done seeding \\m/"