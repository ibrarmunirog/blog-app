import { registerAs } from '@nestjs/config';

export const applicationConfig = registerAs('application', () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME,
  },
  jwt: {
    access: {
      secret: process.env.JWT_SECRETE,
      expiresIn: process.env.JWT_ACCESS_TTL,
    },
    refresh: {
      secret: process.env.JWT_REFRESH_SECRETE,
      expiresIn: process.env.JWT_REFRESH_TTL,
    },
  },
}));
