import React, {useState} from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState('');

  const onInput = (event) => {
    setPokemonName(event.target.value);
  } 

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <input type="text" onChange={onInput} placeholder='Name...'/>
        <button>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
