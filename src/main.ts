import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(morgan('dev'));
  const config = app.get(ConfigService);
  // app.use('/static', express.static(__dirname));
  // const staticDir = path.join(__dirname, '../../static');
  // console.log(staticDir);
  // app.use('/static', express.static(staticDir));
  app.enableCors({
    origin: ['http://localhost:4200', 'http://localhost:8080'], // Aquí especifica los orígenes permitidos
    // other options if needed
  });

  app.use('/imagen', express.static(path.join(__dirname, '../../static')));
  await app.listen(config.get('PORT'));
  // app.enableCors(CORS);
  console.log(`aplicacion corriendo en: ${await app.getUrl()}`);
}

bootstrap();
