// EJERCICIO 1 // 
fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((response) => response.json())
  .then((data) => console.log(data.results[6]));

// EJERCICIO 2 //
function searchById() {
const pokemonId = document.getElementById('pokemonId').value;
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    }