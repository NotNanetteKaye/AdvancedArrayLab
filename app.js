// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}
let mexicanFood = findMexicanFood();
console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
function findVegeterianFood() {
  let results;
    results = dishes.filter(function(veggieFood){
      if (veggieFood.cuisine === "Vegetarian"){
        return true;
      }
      else {
        return false;
      }
    })
  return results;
  }
let vegetarianFood = findVegeterianFood();
console.log("Vegetarian Foods: ", vegetarianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function problemTwoSolver(){
  let results;
  results =dishes.filter(function(italianFood){
    if ((italianFood.cuisine === "italian") && (italianFood.servings > 5)){
      return true;
    }
    return false
  })
  return results;
  }
let problemTwoAnswer = problemTwoSolver();
console.log("Italian Food(s) with a Serving Size of 5:", problemTwoAnswer)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
function problemThreeSolver(){
  let results;
  results=dishes.filter(function(el){
    if (el.id === el.servings){
      return true;
    }
    return false
  })
  return results;
}
let problemThreeAnswer = problemThreeSolver();
console.log("Dish(es) Whose Serving ID Number Matches Their Serving Count: ", problemThreeAnswer)

//4. Create a function that will return only dishes whose serving count is even.
//Filter
function findEvenServingCounts(){
  let results;
  results = dishes.filter(function(even){
    if (even.servings % 2 === 0){
      return true;
    };
    return false;
  })
  return results;
}
let evenServingCounts = findEvenServingCounts();
console.log("Dish(es) with Even Serving Counts: ", evenServingCounts);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
function tomatoAndCheeseFinder() {
  let results;
  results = dishes.filter(function(food){
    if ((food.ingredients === "tomato") && (food.ingredients === "cheese")){
      return true;
    }
    return false;
  })
  return results;
}
let tomatoAndCheeseFood = tomatoAndCheeseFinder();
console.log("Dish(es) Whose Ingredients Include Tomato & Cheese: ", tomatoAndCheeseFood);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
function cuisineTypeFinder() {
  let results;
  results = dishes.map(function(foodie){
    return `${foodie.cuisine}`;
  })
  return results;
}
let cuisineTypes = cuisineTypeFinder();
console.log("Cuisine Types: ", cuisineTypes);

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map
function cuisineDishFinder() {
  let results;
  results = dishes.map(function(cuisinedish){
    return `${cuisinedish.cuisine} ${cuisinedish.name}`
  })
  return results;
}
let cuisineDish = cuisineDishFinder();
console.log("Cuisine Dishes: ", cuisineDish);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter
function findVegetarianFood() {
  let results;
    results = dishes.map(function(veggieFood){
      if (veggieFood.cuisine === "Vegetarian"){
        return `${veggieFood.cuisine} ${veggieFood.name}`;
      }
      else {
        console.log('false');
      }
    })
  return results;
}
let veggieFood = findVegetarianFood();
console.log("Vegetarian Dishes:", veggieFood)

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function foodFinder(callback){
  let results = dishes.filter(function(food){
    if (callback(food.ingredients)){
      return true;
    }
  })
  return results
}

function chickpeaFinder(ingredients){
  if (ingredients.includes("chickpea")){
    return true;
  }
}

let foodFinderResults = foodFinder(chickpeaFinder)
console.log("Foods with chickpea:", foodFinderResults)

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array