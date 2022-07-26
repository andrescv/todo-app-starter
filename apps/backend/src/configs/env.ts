const NODE_ENV = process.env.NODE_ENV || 'development';

export const EnvConfig = {
  name: NODE_ENV,
  isDev: NODE_ENV === 'development',
  isProd: NODE_ENV === 'production',
  isStaging: NODE_ENV === 'staging',
};
