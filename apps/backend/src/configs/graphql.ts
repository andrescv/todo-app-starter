import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLISODateTime } from '@nestjs/graphql';

import { CORSConfig } from './cors';
import { EnvConfig } from './env';

const context = ({ req, res }: any) => {
  return {
    req,
    res,
  };
};

export const GraphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: EnvConfig.isDev,
  persistedQueries: false,
  csrfPrevention: true,
  cache: 'bounded',
  typePaths: ['**/*.graphql'],
  context,
  cors: CORSConfig,
  resolvers: {
    DateTime: GraphQLISODateTime,
  },
};
