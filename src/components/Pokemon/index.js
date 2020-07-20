import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CardContent, BoxContainer, TextBox, Row } from './styles';

export default function Pokemon({ pokemon }) {
  return (
    <Container>
      <Link to={`/details/${pokemon.id}`}>
        <CardContent>
          <div id="imgView">
            <img id="img" src={pokemon.image} alt={pokemon.name} />
          </div>

          <span id="cardHead">
            <p id="name">{pokemon.name}</p>

            <p id="number">#{pokemon.number}</p>
          </span>

          <BoxContainer>
            {pokemon.types.map((i) => (
              <TextBox type={i} key={i}>
                {i}
              </TextBox>
            ))}
          </BoxContainer>

          <Row>
            <p id="field">Category:</p>
            <p id="value">{pokemon.classification.replace('Pokémon', '')}</p>
          </Row>

          <Row>
            <p id="field">Weight:</p>
            <p id="value">{pokemon.height.minimum}</p>
          </Row>

          <Row>
            <p id="field">Height:</p>
            <p id="value">{pokemon.weight.minimum}</p>
          </Row>

          <Row>
            <p id="field">Max. HP:</p>
            <p id="value">{pokemon.maxHP}</p>
          </Row>
        </CardContent>
      </Link>
    </Container>
  );
}
