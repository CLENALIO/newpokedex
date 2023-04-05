import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleClick = () => {
      setPokemonIndex(pokemonIndex => pokemonIndex - 1)
    }

    const handleClick2 = () => {
      setPokemonIndex(pokemonIndex => pokemonIndex + 1)
    }

    const pokemon = pokemonList[pokemonIndex]

  return (

    <div>
      <PokemonCard pokemon= {pokemon}/>
      {pokemonIndex > 0 ? <button onClick={handleClick}> Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick2}> Suivant</button> : null}
    </div>
  )
}

export default App
