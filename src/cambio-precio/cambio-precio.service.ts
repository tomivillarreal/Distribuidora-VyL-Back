import { Injectable } from '@nestjs/common';
import { CreateCambioPrecioDto } from './dto/create-cambio-precio.dto';
import { UpdateCambioPrecioDto } from './dto/update-cambio-precio.dto';

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

  update(id: number, updateCambioPrecioDto: UpdateCambioPrecioDto) {
    return `This action updates a #${id} cambioPrecio`;
  }

  remove(id: number) {
    return `This action removes a #${id} cambioPrecio`;
  }
}
