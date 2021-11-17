let pokemonRepository = (function () {
  //current repository of Pokemon with name, height, type, and abilities
  let repository = [
    {
    name:'Typhlosion',
    height: 5.7,
    type: ['Fire'],
    abilities: ['Blaze']
  },
  {
    name:'Gengar',
    height: 4.11,
    type: ['Ghost', ' Poison'],
    abilities: ['Cursed Body']
  },
   {
    name:'Whimsicott',
    height: 2.4,
    type: ['Grass', ' Fairy'],
    abilities: ['Prankster', ' Infiltrator'],
  },
  {
    name:'Greninja',
    height: 4.11,
    type: ['Water',' Dark'],
    abilities: ['Torrent']
  },
  {
    name:'Umbreon',
    height: 3.3,
    type: ['Dark'],
    abilities: ['Synchronize']
  },
  {
    name:'Luxray',
    height: 4.7,
    type: ['Electric'],
    abilities: ['Intimidate', ' Rivalry']
  },
  {
    name:'Ninetales',
    height: 3.7,
    type: ['Fire'],
    abilities: ['Flash Fire']
  },
  {
    name:'Petilil',
    height: 1.08,
    type: ['Grass'],
    abilities: ['Chlorophyl', ' Own Tempo']
  },
  {
    name:'Onix',
    height: 28.10,
    type: ['Rock', ' Ground'],
    abilities: ['Rock Head', ' Sturdy'],
  }
  ];

  //function to add new Pokemon and its details to the repository
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon &&
      "abilities" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("Pokemon is incorrect");
    }
  }

  function getAll() {
    return repository;
  }

//Shows Pokemon name in console
  function showDetails(pokemon){
    console.log(pokemon.name);
  };

  //function to display list of Pokemon as buttons
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(){
    showDetails(pokemon);
  });

  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
