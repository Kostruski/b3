import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Todos from './components/Todos';

const URL = 'https://graphqlzero.almansi.me/api';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  </React.StrictMode>
);

export default App;
