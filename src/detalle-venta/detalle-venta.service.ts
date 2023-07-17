import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/detalle-venta.dto';
import { DetalleVenta } from './entities/detalle-venta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private readonly detalleVentaRepository: Repository<DetalleVenta>,
  ) {}

  public async create(detalleVenta: DetalleVenta): Promise<DetalleVenta> {
    try {
      const newProduct = this.detalleVentaRepository.create(detalleVenta);
      return await this.detalleVentaRepository.save(newProduct);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
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
