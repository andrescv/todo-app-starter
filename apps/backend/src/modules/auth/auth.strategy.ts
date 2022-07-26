import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

import { JWTConfig } from '@/configs/jwt';
import { SessionConfig } from '@/configs/session';
import { DBService } from '@/modules/db/db.service';

import { AuthToken } from './interfaces/auth-token.interface';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly dbService: DBService) {
    super({
      jwtFromRequest: (req: Request) => {
        if (!req || !req.cookies) return null;
        return req.cookies[SessionConfig.cookie];
      },
      ignoreExpiration: false,
      secretOrKey: JWTConfig.secret,
    });
  }

  async validate(token: AuthToken) {
    return token;
  }
}
