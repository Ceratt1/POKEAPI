console.clear()
let offset = 0;
let limit = 3;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
linkpokemon = Array()


fetch(url)
    .then((promise) => promise.json())
    .then((body) => body.results)
    .then((urlPokemon) =>{

        for (let index = 0; index < urlPokemon.length; index++) {
            linkpokemon += urlPokemon[index]
            
        }


    })
    .then(()=> {
        for (let index = 0; index < linkpokemon.length; index++) {
            console.log(linkpokemon.json())

        }



    })
    .finally(()=> console.log(linkpokemon))