'use strict';
/*------------------------------------------------------------------------------
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one argument: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Call the function once, giving it the object `cartForParty` as an argument.
   Use `console.log` to display the result.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  chips: 3.99,
  drinks: 4.29,
  nuts: 3.12,
  popcorn: 2.1,
  pizza: 8.3,
};

function calculateTotalPrice(obj) {
  let total = [];
  for (const prop in obj) {
    total.push(obj[prop]);
  }
  total = total.reduce((acc, curr) => {
    return acc + curr;
  });
  return `Total: €${total.toFixed(2)}`;
}
calculateTotalPrice(cartForParty);

// ! Do not change or remove the code below
module.exports = {
  cartForParty,
  calculateTotalPrice,
};
