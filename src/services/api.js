import { ApolloClient } from '@apollo/client';
import { cache } from '../graphql/cache';

const client = new ApolloClient({
  cache: cache,
  uri: 'https://graphql-pokemon.now.sh/',
  connectToDevTools: true,
});

export default client;
