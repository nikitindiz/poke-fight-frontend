import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonListContainer from './containers/PokemonListContainer';

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

// const Counter = (props) => {
//   const initialState = 0;

//   // const arrayOfTwoElements = useState(initialState);
//   // const stateItself = arrayOfTwoElements[0];
//   // const functionToUpdateTheState = arrayOfTwoElements[1];

//   const [ stateItself, functionToUpdateTheState ] = useState(initialState);

//   // Component did mount only
//   useEffect(() => {
//     console.log('hi');
//   }, []); // Empty array - no values to watch

//   return (
//     <button
//       onClick={() => {
//         functionToUpdateTheState(stateItself + 1)
//       }}
//     >
//       {stateItself}
//     </button>
//   )
// }

const App = () => {
  return (
    <div className="App">
      <PokemonListContainer />
    </div>
  );
}

export default App;
