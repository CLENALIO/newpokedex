import React from 'react';

const NavButton = ({pokemonList, handlePokemonClick}) => {

    
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => handlePokemonClick(index)}> {pokemon.name}
            </button>))} 
        </div>
    );
};

export default NavButton;