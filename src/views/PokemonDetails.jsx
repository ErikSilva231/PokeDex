import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState('');

  useEffect(() => {
    // Obtener detalles del Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error(`Error al obtener los detalles de ${name}:`, error);
      });

    // Obtener descripción del Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.flavor_text_entries && data.flavor_text_entries.length > 0) {
          setPokemonDescription(data.flavor_text_entries[26].flavor_text);
        }
      })
      .catch((error) => {
        console.error(`Error al obtener la descripción de ${name}:`, error);
      });
  }, [name]);

  return (
    <Container className="text-center">
      <h1 className="py-5">
        Detalles de <span className="fw-bold">{name}</span>
      </h1>
      <Row>
        <Col md={4}>
          {pokemonData.sprites ? (
            <Image src={pokemonData.sprites.other.dream_world.front_default} alt={name} className="img-fluid" />
          ) : null}
        </Col>
        <Col md={2}>
          <div className="text-start">
            <h2>Status:</h2>
            {pokemonData.stats ? (
              <div className="">
                {pokemonData.stats.map((stats) => (
                  <div key={stats.stat.name}>
                    <span className="fw-bold text-uppercase">
                      {stats.stat.name} : <span className="float-end"> {stats.base_stat}</span>
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Col>
        <Col md={2}>
          <div className="text-start">
            <h2>Tipo:</h2>
            <div>
              {pokemonData.types ? (
                pokemonData.types.map((types) => (
                  <span className="text-uppercase">
                    <div key={types.type.name}>
                      <span className="fw-bold text-uppercase">{types.type.name}</span>
                    </div>
                  </span>
                ))
              ) : null}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-start">
            <h2>Descripción:</h2>
            <p>{pokemonDescription}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PokemonDetails;
