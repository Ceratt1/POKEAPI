let offset = 0;
let limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertendoPokemonHTML(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">#001</span>

    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>

        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">

    </div>

</li>
    `
}



const pokemonlist = document.getElementById('pokemonlist')
// pokemonlist.innerHTML += '<li>merda</li>'

fetch(url)
    .then((response) =>  response.json())

    .then((jsonbody) => (jsonbody.results))

    .then ((listapokemons) => {
        for (let index = 0; index < listapokemons.length; index++) {
            const pokemon = listapokemons[index]
            pokemonlist.innerHTML += convertendoPokemonHTML(pokemon)

        }
    })
    
    .catch((erro) =>console.error(erro))
    