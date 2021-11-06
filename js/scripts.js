let pokemonList= [
  {
    name:'Typhlosion',
    height: 5.7,
    type: ['fire'],
    abilities: ['Blaze']
   },
  {
    name:'Gengar',
    height: 4.11,
    type: ['ghost', 'poison'],
    abilities: ['Cursed Body']
    },
  {
    name:'Greninja',
    height: 4.11,
    type: ['water','dark'],
    abilities: ['Torrent']
   },
  {
    name:'Umbreon',
    height: 3.3,
    type: ['dark'],
    abilities: ['Synchronize']
   },
  {
    name:'Luxray',
    height: 4.7,
    type: ['electric'],
    abilities: ['Intimidate', 'Rivalry']
  },
  {
    name:'Ninetales',
    height: 3.7,
    type: ['fire'],
    abilities: ['Flash Fire']
  },
];

let text = " ";
for (let i = 0; i < pokemonList.length; i++){
 if(pokemonList[i].height <5 && pokemonList[i].height >4){
  text = pokemonList[i];
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + "<br>" + "<br>");
}
  else if (pokemonList[i].height > 5.5){
  text = pokemonList[i];
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <i>Wow, that’s big!</i>" + "<br>" + "<br>");
}
  else if (pokemonList[i].height < 5){
  text = pokemonList[i];
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <i>This pokemon is tiny!</i>" + "<br>" + "<br>");
}
  else {
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + "<br>" + "<br>");
}
}
