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
      if(response.status !== 200)throw new Error('Failed to fetch');
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      })
      setPokemonChosen(!pokemonChosen);
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    searchPokemon();
  } 

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            onChange={onInput} 
            placeholder='Name...'/>
          <button onClick={searchPokemon}>Search Pokemon</button>
        </form>
      </div>
      <div className='DisplaySection'>
        {!pokemonChosen ? (
        <h1>Please choose Pokemon</h1>
        ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} alt=''/>
          <h3>Species: {pokemon.species}</h3>
          <h3>Type: {pokemon.type}</h3>
          <h4>Hp: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defence: {pokemon.defense}</h4>
        </>
        )}
      </div>
    </div>
  );
}

export default App;

