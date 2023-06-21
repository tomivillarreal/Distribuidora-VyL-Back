import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { Producto } from './entities/producto.entity';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  public async create(@Body() nuevoProducto: CreateProductoDto) {
    return await this.productoService.create(nuevoProducto);
  }

  @Get()
  public async findAll(): Promise<Producto[]> {
    return await this.productoService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Producto> {
    return await this.productoService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string, 
    @Body() productoActualizado: UpdateProductoDto) {
    return await this.productoService.update(id, productoActualizado);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.productoService.remove(id);
  }
}
