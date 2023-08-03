import { ApolloClient } from '@apollo/client';
import cache from './cache';

const URL = 'https://graphqlzero.almansi.me/api';

const client = new ApolloClient({
  uri: URL,
  cache,
});

export default client;
