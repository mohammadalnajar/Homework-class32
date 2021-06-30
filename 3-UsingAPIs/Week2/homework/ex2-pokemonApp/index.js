'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

async function fetchAndPopulatePokemons() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemons = data.results;

  const selectList = document.querySelector('.select-list');

  selectList.addEventListener('change', (e) => {
    pokemons.forEach((pokemon) => {
      if (pokemon.name == e.target.value) {
        fetchImage(pokemon.url);
      }
    });
  });

  selectList.innerHTML = '';
  const option = document.createElement('option');
  option.textContent = 'Select one Pokemon';
  selectList.appendChild(option);
  pokemons.forEach((pokemon, i) => {
    const option = document.createElement('option');
    option.value = pokemon.name;
    option.textContent = `${i + 1} ${pokemon.name}`;
    selectList.appendChild(option);
  });
}

async function fetchImage(url) {
  const data = await fetchData(url);
  const imgUrl = data.sprites.front_default;
  const img = document.createElement('img');
  const imagesContainer = document.querySelector('.images-container');

  imagesContainer.innerHTML = '';
  img.src = imgUrl;

  imagesContainer.appendChild(img);
}

function main() {
  const getDataBtn = document.createElement('button');
  const selectList = document.createElement('select');
  const imagesContainer = document.createElement('div');

  imagesContainer.classList.add('images-container');
  selectList.classList.add('select-list');

  getDataBtn.setAttribute('type', 'submit');
  getDataBtn.textContent = 'Get Pokemon';
  getDataBtn.addEventListener('click', () => {
    fetchAndPopulatePokemons();
  });

  document.body.appendChild(getDataBtn);
  document.body.appendChild(selectList);
  document.body.appendChild(imagesContainer);
}
window.addEventListener('load', main);
