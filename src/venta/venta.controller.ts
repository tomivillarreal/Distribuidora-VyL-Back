import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/venta.dto';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../utils/error.manager';
import { Venta } from './entities/venta.entity';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  public async create(@Body() createVentaDto: Venta) {
    const newVenta = await this.ventaService.create(createVentaDto)
    return newVenta
  }

  @Get()
  findAll() {
    return this.ventaService.findAll();
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
