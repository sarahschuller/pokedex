let pokemonRepository = (function () {
  //current repository of Pokemon with name, height, type, and abilities
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  //function to add new Pokemon and its details to the repository
  function add(pokemon) {
    if (
      typeof pokemon === 'object') {
      repository.push(pokemon);
    } else {
      console.log("Pokemon is incorrect");
    }
  }

  function getAll() {
    return repository;
  }

//Shows Pokemon name in console
function showDetails(pokemon) {
   loadDetails(pokemon).then(function () {
     console.log(pokemon);
   });
 }
  //function to display list of Pokemon as buttons
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(){
    showDetails(pokemon);
  });

  }
//function to load Pokemon API
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
};
//Fetches Pokemon data from the API and adds it to the pokemonList
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
        return response.json();
      }).then(function (details) {
        item.height = details.height;
        item.types = details.types;
        item.abilities = details.abilities;
      }).catch(function (e) {
        console.error(e);
      });
    }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
