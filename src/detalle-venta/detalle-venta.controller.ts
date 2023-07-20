import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { DetalleVenta } from './entities/detalle-venta.entity';

@Controller('detalle-venta')
export class DetalleVentaController {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Post()
  public async create(@Body() createDetalleVentaDto: DetalleVenta) {
    const newVenta = await this.detalleVentaService.create(
      createDetalleVentaDto,
    );
    return newVenta;
  }

  @Get()
  public async findAll(): Promise<DetalleVenta[]> {
    return await this.detalleVentaService.findAll();
  }

  @Get('/venta:id')
  public async findByVenta(id: number): Promise<DetalleVenta[]> {
    return await this.detalleVentaService.findByVenta(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleVentaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleVentaService.remove(+id);
  }
}
