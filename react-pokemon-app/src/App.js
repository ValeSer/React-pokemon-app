import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: '', 
    species: '', 
    img: '', 
    hp: '', 
    attack: '', 
    defense: '', 
    type: '', 
  });

  const onInput = (event) => {
    setPokemonName(event.target.value);
  } 

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stats,
        attack: response.data.stats[1].base_stats,
        defense: response.data.stats[2].base_stats,
        type: response.data.types[0].type.name,
      });
      setPokemonChosen(!pokemonChosen);
    });
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <input type="text" onChange={onInput} placeholder='Name...'/>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className='DisplaySection'>
        {!pokemonChosen ? (
        <h1>Please choose Pokemon</h1>
        ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img}/>
        </>
        )}
      </div>
    </div>
  );
}

export default App;
