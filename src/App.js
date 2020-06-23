import React, { useState, useEffect } from 'react';
import './App.css';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     }
//   }

//   render() {
//   return (
//     <button
//       onClick={() => {
//         this.setState({ counter: this.state.counter + 1 })
//       }}
//     >
//       {this.state.counter}
//     </button>
//   )
//   }
// }

const Counter = (props) => {
  const initialState = 0;

  // const arrayOfTwoElements = useState(initialState);
  // const stateItself = arrayOfTwoElements[0];
  // const functionToUpdateTheState = arrayOfTwoElements[1];

  const [ stateItself, functionToUpdateTheState ] = useState(initialState);

  // Component did mount only
  useEffect(() => {
    console.log('hi');
  }, []); // Empty array - no values to watch

  return (
    <button
      onClick={() => {
        functionToUpdateTheState(stateItself + 1)
      }}
    >
      {stateItself}
    </button>
  )
}

const PokemonList = () => {
  // IDLE, STARTED, SUCCEED, FAILED
  const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
  const [ fetchError, setFetchError ] = useState(null);
  const [ pokemonList, setPokemonList ] = useState([]);

  useEffect(() => {
    updateFetchStatus('STARTED');

    fetch('https://afternoon-springs-80723.herokuapp.com/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data);
        updateFetchStatus('SUCCEED');
      })
      .catch(err => { // new Error('message') -> err.message
        setFetchError(err.message);
        updateFetchStatus('FAILED');
      })
  }, []);

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
          {JSON.stringify(pokemonList, null, '  ')}
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
}

const App = () => {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
