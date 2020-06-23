import React from 'react';

const SinglePokemon = (props) => {
    const {
        fetchStatus,
        singlePokemon,
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
              {JSON.stringify(singlePokemon, null, '  ')}
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

export default SinglePokemon;
