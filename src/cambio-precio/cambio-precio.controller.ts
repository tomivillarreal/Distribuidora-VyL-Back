import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CambioPrecioService } from './cambio-precio.service';
import { CreateCambioPrecioDto } from './dto/cambio-precio.dto';
@Controller('cambio-precio')
export class CambioPrecioController {
  constructor(private readonly cambioPrecioService: CambioPrecioService) {}

  @Post()
  create(@Body() createCambioPrecioDto: CreateCambioPrecioDto) {
    return this.cambioPrecioService.create(createCambioPrecioDto);
  }

  @Get()
  findAll() {
    return this.cambioPrecioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cambioPrecioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cambioPrecioService.remove(+id);
  }
}
