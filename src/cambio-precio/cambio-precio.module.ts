import { Module } from '@nestjs/common';
import { CambioPrecioService } from './cambio-precio.service';
import { CambioPrecioController } from './cambio-precio.controller';

@Module({
  controllers: [CambioPrecioController],
  providers: [CambioPrecioService]
})
export class CambioPrecioModule {}
