var groceryItems = [
  {
    name:'Black Beans',
    price: 1.99
  },
  {
    name:'Tortilla Chips',
    price: 3.99
  },
  {
    name:'Eggs',
    price: 2.99
  },
  {
    name:'Hummus',
    price: 2.49
  },
  {
    name:'Bread',
    price: 3.49
  },
  {
    name:'Peanut Butter',
    price: 2.99
  }
]

var total = 0;

groceryItems.forEach(function(i){
  total += i.price;
  console.log("Item: " + i.name + " || Price: " + i.price);
})

console.log('Your subtotal is: ' + total);
console.log('Total including 6% Sales Tax: ' + (total * 1.06).toFixed(2));
