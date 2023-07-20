import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { DetalleCompra } from './entities/detalle-compra.entity';

@Injectable()
export class DetalleCompraService {
  constructor(
    @InjectRepository(DetalleCompra)
    private readonly detalleCompraRepository: Repository<DetalleCompra>,
  ) {}

  public async create(detalleCompra: DetalleCompra): Promise<DetalleCompra> {
    try {
      const newDetalleCompra =
        this.detalleCompraRepository.create(detalleCompra);
      return await this.detalleCompraRepository.save(newDetalleCompra);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async findAll(): Promise<DetalleCompra[]> {
    try {
      const detalles: DetalleCompra[] = await this.detalleCompraRepository.find(
        {
          relations: ['compra'],
        },
      );
      if (detalles.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return detalles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleCompra`;
  }
}
