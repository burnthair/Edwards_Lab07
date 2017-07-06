// Create an array to store items and their prices
var groceryItems = [
  {
    name:'Black Beans',
    price: 1.99,
    quantity: 0
  },
  {
    name:'Tortilla Chips',
    price: 3.99,
    quantity: 0
  },
  {
    name:'Eggs',
    price: 2.99,
    quantity: 0
  },
  {
    name:'Hummus',
    price: 2.49,
    quantity: 0
  },
  {
    name:'Bread',
    price: 3.49,
    quantity: 0
  },
  {
    name:'Peanut Butter',
    price: 2.99,
    quantity: 0
  }
]

// Create a function to add a new item and price to the array
function addToList(itemName, itemPrice) {
  var newObject = {name: itemName, price: itemPrice, quantity: 0};
  groceryItems.push(newObject);
}

// Call the function to add a new item and its price to the array
addToList('Chicken', 6.99);

// Create a function that will remove an element from an array
function removeFromList(i) {
  groceryItems.splice(i, 1);
}

// Call the function to remove an element from the array
removeFromList(3);

// Log to the console each item and its price, and calculate the total cost
var total = 0;

groceryItems.forEach(function(i){
  i.quantity = prompt('How many?');
  tempPrice = i.price * i.quantity;
  total += tempPrice;
  console.log("Item: " + i.name + " || Price: " + i.price + " || Quantity: " + i.quantity + " || Sub: " + tempPrice.toFixed(2));;
})

// Log to the console the subtotal
console.log('Your subtotal is: ' + total.toFixed(2));

// Log to the console the subtotal plus 6% sales tax
console.log('Total including 6% Sales Tax: ' + (total * 1.06).toFixed(2));
