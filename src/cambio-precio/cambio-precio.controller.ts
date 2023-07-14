import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CambioPrecioService } from './cambio-precio.service';
import { CreateCambioPrecioDto } from './dto/cambio-precio.dto';
import { CambioPrecio } from './entities/cambio-precio.entity';

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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cambioPrecioService.findOne(+id);
  // }

  @Get('producto/:id')
  public async findByProductLast(
    @Param('id') id: number,
  ): Promise<CambioPrecio> {
    return await this.cambioPrecioService.findByProductLast(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cambioPrecioService.remove(id);
  }

  @Delete('producto/:id')
  public async removeByProducto(@Param('id') id: number) {
    return await this.cambioPrecioService.removeByProducto(id);
  }
}
