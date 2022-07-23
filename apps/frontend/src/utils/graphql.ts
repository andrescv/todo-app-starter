import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

export const gqlSSRCache = ssrExchange({
  isClient: typeof window !== 'undefined',
});

export const gqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API || 'http://localhost:8080/graphql',
  exchanges: [dedupExchange, cacheExchange, gqlSSRCache, fetchExchange],
  fetchOptions: {
    credentials: 'include',
  },
});
