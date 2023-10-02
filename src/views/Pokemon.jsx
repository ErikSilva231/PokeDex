import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import charizard from '../assets/charizard.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        const pokemonNames = data.results.map((pokemon) => pokemon.name);
        setPokemonList(pokemonNames);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de Pokémon:', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleViewStats = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    }
  };

  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Selecciona un <span className="fw-bold">POKEMON</span>{' '}
        <img src={charizard} alt="charizard" className="img-fluid" />
      </h1>

      <Form.Select
        aria-label="Pokemon"
        value={selectedPokemon}
        onChange={handleSelectChange}
      >
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemonName) => (
          <option key={pokemonName} value={pokemonName}>
            {pokemonName}
          </option>
        ))}
      </Form.Select>

      <Button
        className="w-50 mx-auto text-center mt-4 py-3"
        variant="dark"
        onClick={handleViewStats}
      >
        ¡Ver estadísticas!
      </Button>
    </Container>
  );
}

export default Pokemon;
