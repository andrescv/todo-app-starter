import Router from 'next/router';
import { toast } from 'react-toastify';
import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

const errorHandler = errorExchange({
  onError: (e) => {
    if (e.graphQLErrors && e.graphQLErrors.length > 0) {
      for (const error of e.graphQLErrors) {
        // handle authentication errors
        if (
          error.extensions?.code === 'UNAUTHENTICATED' ||
          error.extensions?.code === 'FORBIDDEN'
        ) {
          Router.push('/sign-in');
        }

        toast(error.message, {
          type: 'error',
        });

        break;
      }
    }
  },
});

export const gqlSSRCache = ssrExchange({
  isClient: typeof window !== 'undefined',
});

export const gqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API || 'http://localhost:8080/graphql',
  exchanges: [
    errorHandler,
    dedupExchange,
    cacheExchange,
    gqlSSRCache,
    fetchExchange,
  ],
  fetchOptions: {
    credentials: 'include',
  },
});
