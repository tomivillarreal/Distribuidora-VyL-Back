import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.use(morgan('dev'));
  const config = app.get(ConfigService);
  await app.listen(config.get('PORT'));
  // app.enableCors(CORS);
  console.log(`aplicacion corriendo en: ${await app.getUrl()}`)
}

bootstrap(

);
