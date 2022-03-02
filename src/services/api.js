import { ApolloClient } from '@apollo/client';
import { cache } from '../graphql/cache';

const client = new ApolloClient({
  cache: cache,
  uri: 'https://graphqlpokemon.favware.tech/',
  connectToDevTools: true,
});

export default client;
