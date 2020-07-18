import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';
import GlobalStyle from './styles/global';
import apolloClient from './services/api';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
