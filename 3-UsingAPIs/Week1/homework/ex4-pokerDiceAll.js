/*------------------------------------------------------------------------------
For this exercise you should do the following:
  - Refactor the rollTheDices() function to throw five dices in one go, making 
    use of the dices array and Promise.all().
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Dice 3 rolled off the table.

The provided rollDice() function logs the value of a dice as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dices 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dices that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  return Promise.all([
    rollDice(1),
    rollDice(2),
    rollDice(3),
    rollDice(4),
    rollDice(5),
  ]);
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

// ! my answer on the last question:
/* 
Because the function rollOnce() keeps check  if (roll < randomRollsToDo), if not
then a new rollOnce get invoked with increased roll (roll + 1).
  */

// ! Do not change or remove the code below
module.exports = rollTheDices;
