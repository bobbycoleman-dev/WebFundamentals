function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
);

var pizza2 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella, feta"],
    ["mushrooms", "olives", "onions"]
);

var pizza3 = pizzaOven(
    "thin crust",
    "marinara",
    ["mozzarella, parmesan"],
    ["pepperoni", "bacon", "roasted garlic", "mushrooms"]
);

var pizza4 = pizzaOven(
    "hand tossed",
    "olive oil",
    ["mozzarella, parmesan, asiago, romano"],
    ["basil", "sliced tomato", "roasted garlic"]
);

console.log(pizza1, pizza2, pizza3, pizza4);

function randomPizza() {
    var crustType = ["hand tossed", "thin crust", "deep dish", "stuffed crust"];
    var sauceType = ["traditional", "marinara", "alfredo", "olive oil"];
    var cheeses = ["mozzarella", "parmesan", "asiago", "romano"];
    var toppings = [
        "pepperoni",
        "sausage",
        "bacon",
        "mushroom",
        "garlic",
        "onion",
    ];

    var pizza = {};

    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];

    return pizza;
}

console.log(randomPizza());
