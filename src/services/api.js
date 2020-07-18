import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql-pokemon.now.sh/',
  //'https://48p1r2roz4.sse.codesandbox.io',
});

export default client;
