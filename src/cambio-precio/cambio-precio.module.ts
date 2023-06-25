import { Module } from '@nestjs/common';
import { CambioPrecioService } from './cambio-precio.service';
import { CambioPrecioController } from './cambio-precio.controller';
import { CambioPrecio } from './entities/cambio-precio.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CambioPrecio])],
  controllers: [CambioPrecioController],
  providers: [CambioPrecioService]
})
export class CambioPrecioModule {}
