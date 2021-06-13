'use strict';

/*------------------------------------------------------------------------------
- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollBack()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDice() {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the dice MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random dice value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);

      // Use callback to notify that the dice rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
      }

      // Use callback to communicate the final dice value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
}

rollDice()
  .then((value) => console.log(`Success! Dice settled on ${value}.`))
  .catch((error) => console.log(error.message));

// ! My answer on the last question
/* The problem is gone after using the promise, because the executor function of
the promise calls either the resolve function or the reject function and the
first call will determine the new state of the promise. So when the
state of the promise changed from pending to reject it cannot be resolved
again.*/

// ! Do not change or remove the code below
module.exports = rollDice;
