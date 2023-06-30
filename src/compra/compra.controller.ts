import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/compra.dto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
