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

  public async findAll(): Promise<DetalleVenta[]> {
    try {
      const detalles: DetalleVenta[] = await this.detalleVentaRepository.find({
        relations: ['venta'],
      });
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

  public async findByVenta(idVenta: number): Promise<DetalleVenta[]> {
    try {
      const detalles: DetalleVenta[] = await this.detalleVentaRepository.find({
        relations: ['producto', 'venta'],
        where: {
          venta: { id: idVenta },
        },
      })
      ;
      if (detalles.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      console.log(detalles)
      return detalles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleVenta`;
  }
}
