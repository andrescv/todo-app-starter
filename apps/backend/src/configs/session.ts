import { JWTConfig } from './jwt';

export const SessionConfig = {
  cookie: process.env.SESSION_COOKIE || 'todo-app.session-token.dev',
  maxAge: JWTConfig.signOptions.expiresIn * 1000,
};
