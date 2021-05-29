'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

const h1 = document.createElement('h1');
h1.textContent = 'HERE WILL COME THE CURRENT TIME';
document.body.appendChild(h1);
function addCurrentTime() {
  const time = new Date();
  h1.textContent = `THE CURRENT TIME IS:  ${time.toLocaleTimeString('nl-NL')}`;
}
setInterval(addCurrentTime, 1000);

window.addEventListener('DOMContentLoaded', addCurrentTime);
