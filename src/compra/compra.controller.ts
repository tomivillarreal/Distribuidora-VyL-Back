import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CompraService } from './compra.service';
import { Compra } from './entities/compra.entity';
import { Cipher } from 'crypto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  public async create(@Body() createCompraDto: Compra) {
    const newCompra = await this.compraService.create(createCompraDto);
    return newCompra;
  }

  @Get()
  public async findAll(): Promise<Compra[]> {
    return await this.compraService.findAll();
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
