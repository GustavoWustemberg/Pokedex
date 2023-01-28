import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import PokemonCard from "../Components/PokemonCard";
import Skeletons from "../Components/Skeletons";
import ModalUpdatePokemon from "../Components/Modal";

function Home(inputProps) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonItem, setPokemonItem] = useState('');
  const [loadModal, setLoadModal] = useState(false);

  console.log(pokemons)

  function getPokemons() {
    let endPoints = [];
    for (let i = 1; i <= 50; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endPoints.map((endPoint) =>
      axios.get(endPoint)))
      .then((res) => { setPokemons(res); }) // Funciona da mesma forma que o async await, trabalha com as promisses.
      .catch((err) => { console.log(err); }); // Funciona da mesma forma que o try catch.
  }

  function showModalPokemon(pokemonDt) {
    setLoadModal(true);
    setPokemonItem(pokemonDt);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemonFilter = (name) => {
    let filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name.toLowerCase())) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons)
  }

  return (
    <div>
      {loadModal && <ModalUpdatePokemon isOpen={loadModal} dataPokemon={pokemonItem} />}
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? <Skeletons /> :
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                <span onClick={() => showModalPokemon(pokemon)}>
                  <PokemonCard
                    pokemonName={pokemon.data.name}
                    pokemonImage={pokemon.data.sprites.front_default}
                    pokemonType={pokemon.data.types}
                  />
                </span>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
