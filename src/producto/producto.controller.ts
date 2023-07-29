import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './entities/producto.entity';
import { CambioPrecioService } from 'src/cambio-precio/cambio-precio.service';

@Controller('producto')
export class ProductoController {
  constructor(
    private readonly productoService: ProductoService,
    private readonly cambioPrecioService: CambioPrecioService,
  ) {}

  @Post()
  public async create(
    @Body('param1') param1: Producto,
    @Body('param2') param2: number,
  ) {
    const newProduct = await this.productoService.create(param1, param2);
    return newProduct;
  }

  @Get()
  public async findAll(): Promise<Producto[]> {
    return await this.productoService.findAll();
  }

  // @Get()
  // public async findAll(): Promise<Producto[]> {
  //   return await this.productoService.findAll();
  // }

  @Get('/venta')
  public async findAllVenta(): Promise<Producto[]> {
    return await this.productoService.findAllVenta();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Producto> {
    return await this.productoService.findOne(+id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body('param1') productoActualizado: Producto,
    @Body('param2') precio: number,
  ) {
    const product = await this.productoService.update(
      id,
      productoActualizado,
      precio,
    );
    return product;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.productoService.remove(id);
  }

  @Get('/estante/:id')
  public async findAllByEstante(@Param('id') id: number): Promise<Producto[]> {
    return await this.productoService.findAllByEstante(id);
  }

  @Get('/categoria/:id')
  public async findAllByCategoria(
    @Param('id') id: number,
  ): Promise<Producto[]> {
    return await this.productoService.findAllByCategoria(id);
  }
}
