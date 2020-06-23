import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SinglePokemon from '../components/SinglePokemon';

// Smart - it handles the business logic
const SinglePokemonContainer = () => {
    const { id } = useParams();

    // IDLE, STARTED, SUCCEED, FAILED
    const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
    const [ fetchError, setFetchError ] = useState(null);
    const [ singlePokemon, setSinglePokemon ] = useState({});

    useEffect(() => {
      updateFetchStatus('STARTED');

      fetch(`https://frozen-sands-71650.herokuapp.com/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
          setSinglePokemon(data);
          updateFetchStatus('SUCCEED');
        })
        .catch(err => { // new Error('message') -> err.message
          setFetchError(err.message);
          updateFetchStatus('FAILED');
        })
    }, [id]);

    return (
      <SinglePokemon
        fetchStatus={fetchStatus}
        fetchError={fetchError}
        singlePokemon={singlePokemon}
      />
    );
  }

  export default SinglePokemonContainer;
