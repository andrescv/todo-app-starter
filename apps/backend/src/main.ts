import { config as loadEnv } from 'dotenv-safe';
loadEnv();

import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { AppModule } from '~app';
import { GlobalExceptionFilter } from '~common/filters/global-exception.filter';
import { GlobalValidationPipe } from '~common/pipes/global-validation.pipe';
import { AppConfig } from '~configs/app';
import { EnvConfig } from '~configs/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());
  app.use(cookieParser());
  app.useGlobalPipes(new GlobalValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());

  if (!EnvConfig.isDev) app.use(helmet());

  await app.listen(AppConfig.port);
}

bootstrap();
