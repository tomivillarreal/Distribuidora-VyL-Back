import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstanteService } from './estante.service';
import { CreateEstanteDto } from './dto/create-estante.dto';
import { UpdateEstanteDto } from './dto/update-estante.dto';

@Controller('estante')
export class EstanteController {
  constructor(private readonly estanteService: EstanteService) {}

  @Post()
  create(@Body() createEstanteDto: CreateEstanteDto) {
    return this.estanteService.create(createEstanteDto);
  }

  @Get()
  findAll() {
    return this.estanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstanteDto: UpdateEstanteDto) {
    return this.estanteService.update(+id, updateEstanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estanteService.remove(+id);
  }
}
