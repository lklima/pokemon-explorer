import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  query {
    pokemons(first: 151) {
      id
      number
      name
      image
      types
      classification
      maxHP
      height {
        minimum
      }
      weight {
        minimum
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      image
      types
      classification
      maxHP
      weaknesses
      height {
        minimum
      }
      weight {
        minimum
      }
      evolutions {
        name
        image
      }
    }
  }
`;
