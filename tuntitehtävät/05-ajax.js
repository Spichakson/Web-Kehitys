async function fetchData(url) {
    try { 
        
        const response = await fetch (url,);
    
        if(response.ok) {
            const response_data = await response.json();
            return response_data
        } else { 
            throw new Error(`HTTP-error! Status: ${response.status}`)
        }
    } catch (error) {
        console.log(`Error while gettig data {error}`)
    }
   
} 

async function showPokemonTypes(event, url) {
    const pokemonData = await fetchData(url)
    console.log(pokemonData)
    console.log(event)
}





async function createPokemonView() {
    const pokemonData = await fetchData("https://pokeapi.co/api/v2/pokemon");
    const pokemonDiv = document.querySelector("#poke-content");
    for (let pokemon of pokemonData.results){
        console.log(pokemon)
        let onePokemonDiv = document.createElement("div")
        let pokemonText = document.createElement("p");

        pokemonText.textContent = pokemon.name;

        pokemonText.addEventListener("click", (event) => showPokemonTypes(event, pokemon.url))
        
        onePokemonDiv.appendChild(pokemonText)
        pokemonDiv.appendChild(onePokemonDiv);
    }

}



createPokemonView()

