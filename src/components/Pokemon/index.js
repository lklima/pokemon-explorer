import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Pokemon({ pokemon }) {
  return (
    <Container>
      <Link to={`/repository/${pokemon.id}`}>
        <div>
          <div id="imgContent">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </div>
      </Link>
    </Container>
  );
}
