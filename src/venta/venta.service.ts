import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/venta.dto';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { ConsoleLogger } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>
  ) {}


  public async create(venta: Venta): Promise<Venta> {
    try {
      const newProduct = this.ventaRepository.create(venta);
      return await this.ventaRepository.save(newProduct);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
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
