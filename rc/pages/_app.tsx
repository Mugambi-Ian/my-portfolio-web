import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { apolloClient } from '@/utils/Apollo';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />{' '}
  </ApolloProvider>
);

export default MyApp;
