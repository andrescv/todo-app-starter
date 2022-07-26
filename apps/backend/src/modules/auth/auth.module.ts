import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JWTConfig } from '@/configs/jwt';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [JwtModule.register(JWTConfig)],
  providers: [AuthResolver, AuthService, AuthStrategy],
})
export class AuthModule {}
