import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphQLConfig } from '~configs/graphql';
import { AuthModule } from '~modules/auth/auth.module';
import { DBModule } from '~modules/db/db.module';
import { TodoModule } from '~modules/todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig),
    AuthModule,
    DBModule,
    TodoModule,
  ],
})
export class AppModule {}
