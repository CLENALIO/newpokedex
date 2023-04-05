import React from 'react';



const PokemonCard = ({pokemon}) => {

    return (
            <figure>
               {pokemon.imgSrc != null ? <img src={pokemon.imgSrc}/> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
            </figure>
    );
};

export default PokemonCard;