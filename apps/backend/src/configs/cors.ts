const APP_ORIGIN = process.env.APP_ORIGIN || 'http://localhost:3000';

export const CORSConfig = {
  credentials: true,
  origin: APP_ORIGIN,
};
