import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './index';

import { GET_ALL_POKEMONS } from '../../queries';

const mocks = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: { first: 151 },
    },
    result: {
      data: {
        pokemons: [
          {
            id: 'UG9rZW1vbjowMDE=',
            number: '001',
            name: 'Bulbasaur',
            image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
            types: ['Grass', 'Poison'],
            classification: 'Seed Pokémon',
            maxHP: 1071,
            height: {
              minimum: '0.61m',
            },
            weight: {
              minimum: '6.04kg',
            },
          },
          {
            id: 'UG9rZW1vbjowMDI=',
            number: '002',
            name: 'Ivysaur',
            image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            types: ['Grass', 'Poison'],
            classification: 'Seed Pokémon',
            maxHP: 1632,
            height: {
              minimum: '0.88m',
            },
            weight: {
              minimum: '11.38kg',
            },
          },
          {
            id: 'UG9rZW1vbjowMDM=',
            number: '003',
            name: 'Venusaur',
            image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            types: ['Grass', 'Poison'],
            classification: 'Seed Pokémon',
            maxHP: 2580,
            height: {
              minimum: '1.75m',
            },
            weight: {
              minimum: '87.5kg',
            },
          },
          {
            id: 'UG9rZW1vbjowMDQ=',
            number: '004',
            name: 'Charmander',
            image: 'https://img.pokemondb.net/artwork/charmander.jpg',
            types: ['Fire'],
            classification: 'Lizard Pokémon',
            maxHP: 955,
            height: {
              minimum: '0.53m',
            },
            weight: {
              minimum: '7.44kg',
            },
          },
          {
            id: 'UG9rZW1vbjowMDU=',
            number: '005',
            name: 'Charmeleon',
            image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
            types: ['Fire'],
            classification: 'Flame Pokémon',
            maxHP: 1557,
            height: {
              minimum: '0.96m',
            },
            weight: {
              minimum: '16.63kg',
            },
          },
        ],
      },
    },
  },
];

describe('Test for Home', () => {
  it('type and clear search text', () => {
    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Router>
          <Home />
        </Router>
      </MockedProvider>,
    );
    const search = 'char';
    const fieldNode = screen.getByTestId('search-field');

    fireEvent.change(fieldNode, { target: { value: search } });
    expect(fieldNode.value).toEqual(search);

    const btnNode = screen.getByTestId('button');
    fireEvent.click(btnNode);

    expect(fieldNode.value).toEqual('');
  });
});
