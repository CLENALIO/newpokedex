import React from 'react';

const NavBar = ({pokemonIndex, pokemonList, handleClick, handleClick2}) => {
    return (
        <div>
        {pokemonIndex > 0 ? <button onClick={handleClick}> Précédent</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick2}> Suivant</button> : null}        
        </div>
    );
};

export default NavBar;