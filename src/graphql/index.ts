/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import type { DocumentNode } from '@apollo/client';
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
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
}

export const apolloClient = createApolloClient();

export const apollo_server = async <T>(query: DocumentNode, locale: string) => {
  try {
    const { data, error } = await apolloClient.query({
      query,
      variables: { locale, time: new Date().getTime() },
    });

    return { data: data as T, error };
  } catch (error) {
    return { error };
  }
};
