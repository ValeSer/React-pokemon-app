import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState('');

  const onInput = (event) => {
    setPokemonName(event.target.value);
  } 

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => console.log(response));
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <input type="text" onChange={onInput} placeholder='Name...'/>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
