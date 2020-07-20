import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';

import Details from './index';

import { GET_POKEMON } from '../../queries';

const mocks = [
  {
    request: {
      query: GET_POKEMON,
      variables: { id: 'UG9rZW1vbjowMDE=' },
    },
    result: {
      data: {
        pokemon: {
          id: 'UG9rZW1vbjowMDE=',
          number: '001',
          name: 'Bulbasaur',
          image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
          types: ['Grass', 'Poison'],
          classification: 'Seed Pokémon',
          maxHP: 1071,
          weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
          height: {
            minimum: '0.61m',
          },
          weight: {
            minimum: '6.04kg',
          },
          evolutions: [
            {
              name: 'Ivysaur',
              image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            },
            {
              name: 'Venusaur',
              image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            },
          ],
        },
      },
    },
  },
];

describe('Test for Details', () => {
  it('type and clear search text', () => {
    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Router>
          <Details id="UG9rZW1vbjowMDE=" />
        </Router>
      </MockedProvider>,
    );

    const btnNode = screen.getByTestId('edit-button');
    fireEvent.click(btnNode);
  });
});
