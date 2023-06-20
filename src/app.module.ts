import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { EstanteModule } from './estante/estante.module';
import { CambioPrecioModule } from './cambio-precio/cambio-precio.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { VentaModule } from './venta/venta.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import { CompraModule } from './compra/compra.module';
import { DetalleCompraModule } from './detalle-compra/detalle-compra.module';

@Module({
  imports: [ProductoModule,CategoriaModule, EstanteModule, CambioPrecioModule, 
    ConfigModule.forRoot({ 
    isGlobal : true, 
    envFilePath: `.${process.env.NODE_ENV}.env`
  }),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    VentaModule,
    DetalleVentaModule,
    CompraModule,
    DetalleCompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}