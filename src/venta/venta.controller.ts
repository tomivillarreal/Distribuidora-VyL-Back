import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';
import { Venta } from './entities/venta.entity';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  public async create(@Body() createVentaDto: Venta) {
    const newVenta = await this.ventaService.create(createVentaDto);
    return newVenta;
  }

  @Get()
  public async obtenerTodasLasVentas(): Promise<Venta[]> {
    return await this.ventaService.obtenerTodasLasVentas();
  }

  @Get('/hoy')
  public async findAllDaily(): Promise<Venta[]> {
    return await this.ventaService.findAllDaily();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}
