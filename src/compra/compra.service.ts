import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/compra.dto';

@Injectable()
export class CompraService {
  create(createCompraDto: CreateCompraDto) {
    return 'This action adds a new compra';
  }

  findAll() {
    return `This action returns all compra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }


  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
