//list of Pokemon and their height, type(s), and abilities
let pokemonList= [
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

//displays the list of Pokemon with descriptive text dependent on the Pokemon height.

pokemonList.forEach(function (pokemon) {
  if (pokemon.height <10 && pokemon.height >3)
    document.write('<p>' + pokemon.name + ' (' + 'Type: ' + pokemon.type + ';' + ' Abilities:'  + pokemon.abilities + ';' + ' Height: ' + pokemon.height + ')' + '</p>');

  else if (pokemon.height > 10)
    document.write('<p>' + pokemon.name + ' (' + 'Type: ' + pokemon.type + ';' + ' Abilities:'  + pokemon.abilities + ';' + ' Height: ' + pokemon.height + ')' + " <i>Wow! That's Big!</i>" + '</p>');

  else if (pokemon.height < 3)
    document.write('<p>' + pokemon.name + ' (' + 'Type: ' + pokemon.type + ';' + ' Abilities:'  + pokemon.abilities + ';' + ' Height: ' + pokemon.height + ')' + " <i>This Pokemon is Tiny!</i>" + '</p>');
});
