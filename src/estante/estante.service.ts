import { Injectable } from '@nestjs/common';
import { CreateEstanteDto } from './dto/create-estante.dto';
import { UpdateEstanteDto } from './dto/update-estante.dto';

@Injectable()
export class EstanteService {
  create(createEstanteDto: CreateEstanteDto) {
    return 'This action adds a new estante';
  }

  findAll() {
    return `This action returns all estante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estante`;
  }

  update(id: number, updateEstanteDto: UpdateEstanteDto) {
    return `This action updates a #${id} estante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estante`;
  }
}
