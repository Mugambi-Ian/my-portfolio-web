import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_API_ENDPOINT,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = process.env.GRAPHQL_API_KEY;
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });
  return forward(operation);
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      mutate: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  });
}

export const apolloClient = createApolloClient();
