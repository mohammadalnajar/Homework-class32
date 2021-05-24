'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const img = document.querySelector('img');
img.style.left = '0px';
let counter = 0;
let interval;
function intervalFunc() {
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  interval = setInterval(catWalk, 50);
}

function catWalk() {
  if (counter <= window.innerWidth - 300) {
    counter += 10;
  } else {
    counter = 0;
  }
  img.style.left = `${counter}px`;

  if (
    window.innerWidth / 2 - 190 < counter &&
    counter < window.innerWidth / 2 - 170
  ) {
    counter += 20;
    img.src = './src/tenor.gif';
    clearInterval(interval);
    setTimeout(intervalFunc, 3000);
  }
}

window.addEventListener('load', intervalFunc);
