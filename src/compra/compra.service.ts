import { Injectable } from '@nestjs/common';
import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
  ) {}

  public async create(compra: Compra): Promise<Compra> {
    try {
      const newCompra = this.compraRepository.create(compra);
      return await this.compraRepository.save(newCompra);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<Compra[]> {
    try {
      const compras: Compra[] = await this.compraRepository.find({
        relations: ['detalleCompra'],
      });
      if (compras.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return compras;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async obtenerTodasLasCompras(): Promise<Compra[]> {
    return this.compraRepository.find({
      relations: ['detalleCompra', 'detalleCompra.producto'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
