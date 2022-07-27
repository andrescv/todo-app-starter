import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { GraphQLContext } from '@/common/interfaces/graphql-context.interface';

import { AuthService } from './auth.service';
import { SignInInput } from './inputs/sign-in.input';
import { SignUpInput } from './inputs/sign-up.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  async signUp(@Args('input') input: SignUpInput) {
    return this.authService.signUp(input);
  }

  @Mutation()
  async signIn(
    @Args('input') input: SignInInput,
    @Context() ctx: GraphQLContext
  ) {
    return this.authService.signIn(input, ctx);
  }

  @Mutation()
  async signOut(@Context() ctx: GraphQLContext) {
    return this.authService.signOut(ctx);
  }
}
