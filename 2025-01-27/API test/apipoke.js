fetchData();
async function fetchData() {
    try {
        const pokemonName =document.getElementById('pokemonName').value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgELement = document.getElementById('pokemonSprite');

        imgELement.src = pokemonSprite;
        imgELement.style.display = 'block';
    }
    catch (error) {
        console.error(error);
    }
}