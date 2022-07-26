export const SessionConfig = {
  cookie: process.env.SESSION_COOKIE || 'todo-app.session-token.dev',
  maxAge: 60 * 60 * 24 * 1000,
};
