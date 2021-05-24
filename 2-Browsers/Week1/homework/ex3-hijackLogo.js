'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const googleImg = document.querySelector('.lnXdpd');
  googleImg.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleImg.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
