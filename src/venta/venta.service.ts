import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/venta.dto';

@Injectable()
export class VentaService {
  create(createVentaDto: CreateVentaDto) {
    return 'This action adds a new venta';
  }

  findAll() {
    return `This action returns all venta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
