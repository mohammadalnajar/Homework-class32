'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';

const li = document.querySelectorAll('ul li');

li.forEach((item, idx) => {
  item.classList.add('list-item');
  switch (idx) {
    case 0:
      item.firstElementChild.textContent = 'Mohammad';
      break;
    case 1:
      item.firstElementChild.textContent = 'Pizza';
      break;
    case 2:
      item.firstElementChild.textContent = 'Syria';
      break;
  }
});
