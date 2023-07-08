import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { CambioPrecioService } from 'src/cambio-precio/cambio-precio.service';
import { CambioPrecio } from 'src/cambio-precio/entities/cambio-precio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto,CambioPrecio])],
  controllers: [ProductoController],
  providers: [ProductoService, CambioPrecioService]
})
export class ProductoModule {}
