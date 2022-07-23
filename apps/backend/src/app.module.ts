import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphQLConfig } from '~configs/graphql';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig)],
})
export class AppModule {}
