import React from 'react';

const PokemonList = (props) => {
    const {
        fetchStatus,
        pokemonList,
        fetchError
    } = props;

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
          <div className="pokemon-list">
            Loading...
          </div>
        )
      }

      if (fetchStatus === 'SUCCEED') {
        return (
          <div className="pokemon-list">
            <pre>
              {pokemonList.map(pokemon => (
                  <div>
                      { pokemon.name.english }
                  </div>
              ))}
            </pre>
          </div>
        )
      }

      // ERROR
      return (
        <div className="pokemon-list">
          Sorry, error occurred:

          <pre>
            {fetchError}
          </pre>
        </div>
      );
};

export default PokemonList;
