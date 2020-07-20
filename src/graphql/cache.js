import { makeVar, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        home: {
          read() {
            return pokemonsVar();
          },
        },
      },
    },
  },
});

const pokemonsInitialValue = JSON.parse(localStorage.getItem('pokemons'));

export const pokemonsVar = makeVar(pokemonsInitialValue);
