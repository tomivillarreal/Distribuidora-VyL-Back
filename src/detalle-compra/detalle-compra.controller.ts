import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DetalleCompraService } from './detalle-compra.service';
import { DetalleCompra } from './entities/detalle-compra.entity';

@Controller('detalle-compra')
export class DetalleCompraController {
  constructor(private readonly detalleCompraService: DetalleCompraService) {}

  @Post()
  public async create(@Body() createDetalleCompraDto: DetalleCompra) {
    const newVenta = await this.detalleCompraService.create(
      createDetalleCompraDto,
    );
    return newVenta;
  }

  @Get()
  public async findAll(): Promise<DetalleCompra[]> {
    return await this.detalleCompraService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleCompraService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleCompraService.remove(+id);
  }
}
