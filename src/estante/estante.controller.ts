import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstanteService } from './estante.service';
import { CreateEstanteDto, UpdateEstanteDto } from './dto/estante.dto';


@Controller('estante')
export class EstanteController {
  constructor(private readonly estanteService: EstanteService) {}

  @Post()
  public async create(@Body() createEstanteDto: CreateEstanteDto) {
    return await this.estanteService.create(createEstanteDto);

  }

  @Get()
  public async findAll() {
    return await this.estanteService.findAll();
  }

  @Get('id/:id')
  public async findOne(@Param('id') id: string) {
    return await this.estanteService.findOne(id);
  }

  @Get('name/:name')
  findOneByName(@Param('name') name: string) {
    return this.estanteService.findOneByName(name);
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateEstanteDto: UpdateEstanteDto) {
    return await this.estanteService.update(id, updateEstanteDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.estanteService.remove(id);
  }
}
