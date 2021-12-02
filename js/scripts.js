//IIFE wrap
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon) {
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } else {
      console.log('This is not a Pokemon object!');
    }
  }

  //Get pokemon from repository
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let container = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    container.classList.add('div');
    button.classList.add('pokebutton');

    container.appendChild(button);
    listItem.appendChild(container);
    pokemonList.appendChild(listItem);

    onclickEventListener(button, pokemon);
  }

//show pokemon details when button is clicked
  function onclickEventListener(element, object) {
    element.addEventListener('click', function () {
      showDetails(object);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {

        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //Show pokemon details from the repository
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    // Clear existing modal content
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    modalTitle.empty();
    modalBody.empty();

    // Create content to be appended to the modal
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
    let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');

    //Append content to the modal
    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);


    $('#exampleModalLive').modal();
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


//scroll to the top
mybutton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display='block';
  }else{
    mybutton.style.display = 'none';
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//search bar function
document.querySelector('.search-pokemon').addEventListener('submit', function(e){
     event.preventDefault();
     let query = document.querySelector('#myInput').value;
     document.querySelector('.pokemon-list').innerHTML = '';
     if (query === '') {
       pokemonRepository.getAll().forEach(function (pokemon) {
         pokemonRepository.addListItem(pokemon);
       });
     } else {
       pokemonRepository.getAll().forEach(function (pokemon) {
         if (pokemon.name.indexOf(query) > -1) {
           pokemonRepository.addListItem(pokemon);
         }
       });
     }
   });
