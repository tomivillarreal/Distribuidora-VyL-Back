import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { CreateDetalleVentaDto } from './dto/detalle-venta.dto';

@Controller('detalle-venta')
export class DetalleVentaController {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Post()
  create(@Body() createDetalleVentaDto: CreateDetalleVentaDto) {
    return this.detalleVentaService.create(createDetalleVentaDto);
  }

  @Get()
  findAll() {
    return this.detalleVentaService.findAll();
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
