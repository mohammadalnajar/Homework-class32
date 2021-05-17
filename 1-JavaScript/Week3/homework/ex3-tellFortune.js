'use strict';
/*------------------------------------------------------------------------------
Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments: number of children (`number`), partner's 
     name (`string`), geographic location (`string`) and job title (`string`).
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/
const numKids = [1, 2, 3, 4, 5];

const partnerNames = ['Soha', 'Lina', 'Nour', 'Yasmin', 'Rasha'];

const locations = ['Amsterdam', 'Utrecht', 'Eindhoven', 'Rotterdam', 'Almera'];

const jobTitles = [
  'Architect',
  'Translator',
  'Computer Engineer',
  'Database Administrator',
  'Cars Technician',
];

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}
function tellFortune(kids, partnerName, location, job) {
  let arr = [kids, partnerName, location, job];
  arr = arr.map((argument) => {
    argument = selectRandomly(argument);
    return argument;
  });
  const kidsUnit = arr[0] === 1 ? 'kid' : 'kids';
  return `You will be a ${arr[3]} in ${arr[2]}, married to ${arr[1]} with ${arr[0]} ${kidsUnit}.`;
}
//   I still get an error with test that tellFortune should call function
//   'selectRandomly' for each of its arguments, although I made a loop above
//   using the map() method on the arguments;
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));

// ! Do not change or remove the code below
module.exports = tellFortune;
