import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/detalle-venta.dto';

@Injectable()
export class DetalleVentaService {
  create(createDetalleVentaDto: CreateDetalleVentaDto) {
    return 'This action adds a new detalleVenta';
  }

  findAll() {
    return `This action returns all detalleVenta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleVenta`;
  }


  remove(id: number) {
    return `This action removes a #${id} detalleVenta`;
  }
}
