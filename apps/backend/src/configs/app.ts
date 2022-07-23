export const AppConfig = {
  port: parseInt(process.env.PORT || '8080'),
  domain: process.env.APP_DOMAIN || 'localhost',
};
