import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApolloError } from 'apollo-server-express';
import { hash, verify } from 'argon2';

import { GraphQLContext } from '@/common/interfaces/graphql-context.interface';
import { EnvConfig } from '@/configs/env';
import { SessionConfig } from '@/configs/session';
import { DBService } from '@/modules/db/db.service';

import { SignInInput } from './inputs/sign-in.input';
import { SignUpInput } from './inputs/sign-up.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly dbService: DBService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(input: SignUpInput) {
    const userExists = await this.dbService.user.count({
      where: {
        email: input.email,
      },
    });

    if (Boolean(userExists)) {
      throw new ApolloError(
        'User already registered.',
        'USER_ALREADY_REGISTERED'
      );
    }

    const user = await this.dbService.user.create({
      data: {
        fullName: input.fullName,
        email: input.email,
        password: await hash(input.password),
      },
    });

    return user;
  }

  async signIn(input: SignInInput, ctx: GraphQLContext) {
    const user = await this.dbService.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!user) {
      throw new ApolloError('User not found.', 'USER_NOT_FOUND');
    }

    if (!(await verify(user.password, input.password))) {
      throw new ApolloError('Wrong credentials.', 'WRONG_CREDENTIALS');
    }

    ctx.res.cookie(
      SessionConfig.cookie,
      this.jwtService.sign({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      }),
      {
        httpOnly: true,
        sameSite: 'lax',
        secure: !EnvConfig.isDev,
        maxAge: SessionConfig.maxAge,
      }
    );

    return user;
  }

  async signOut(ctx: GraphQLContext) {
    ctx.res.clearCookie(SessionConfig.cookie);

    return true;
  }
}
