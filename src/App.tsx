import React from 'react';
import { ApolloProvider } from '@apollo/client';
// import { FlagProvider } from '@unleash/proxy-client-react';
import Todos from './components/Todos';
import client from './apollo-cilient/client';

// const config = {
//   url: 'http://localhost:4242/api/frontend/', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
//   clientKey:
//     '*:development.5a422f6143c6bf57356a4c233d7d4aabdb9c1f5f159a7655caaf866f', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
//   refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
//   appName: 'B3', // The name of your application. It's only used for identifying your application
// };

const App: React.FC = () => (
  <React.StrictMode>
    {/* <FlagProvider config={config}> */}
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
    {/* </FlagProvider> */}
  </React.StrictMode>
);

export default App;
