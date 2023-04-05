import React from 'react';
import { useEffect } from "react";

const NavBar = ({pokemonIndex, pokemonList, handleClick, handleClick2}) => {


    useEffect(
        () =>  {
            pokemonIndex === 3 ? alert("pika pikachu !!!") : null
        }, 
     );

    return (
        <div>
        {pokemonIndex > 0 ? <button onClick={handleClick}> Précédent</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick2}> Suivant</button> : null}  
        </div>
    );
};

export default NavBar;