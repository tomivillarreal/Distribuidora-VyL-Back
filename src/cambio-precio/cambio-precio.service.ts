import { Injectable } from '@nestjs/common';
import { CreateCambioPrecioDto } from './dto/cambio-precio.dto';


@Injectable()
export class CambioPrecioService {
  create(createCambioPrecioDto: CreateCambioPrecioDto) {
    return 'This action adds a new cambioPrecio';
  }

  findAll() {
    return `This action returns all cambioPrecio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cambioPrecio`;
  }

  remove(id: number) {
    return `This action removes a #${id} cambioPrecio`;
  }
}
