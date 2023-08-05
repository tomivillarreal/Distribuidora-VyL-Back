import { Injectable } from '@nestjs/common';
import { Venta } from './entities/venta.entity';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import { DetalleVenta } from 'src/detalle-venta/entities/detalle-venta.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  public async create(venta: Venta): Promise<Venta> {
    try {
      const newProduct = this.ventaRepository.create(venta);
      return await this.ventaRepository.save(newProduct);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<Venta[]> {
    try {
      const ventas: Venta[] = await this.ventaRepository.find({
        relations: ['detalleVenta'],
      });
      if (ventas.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return ventas;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAllDaily(): Promise<Venta[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer a las 00:00:00
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    try {
      const ventas: Venta[] = await this.ventaRepository.find({
        relations: ['detalleVenta', 'detalleVenta.producto'],
        where: {
          createdAt: Between(today, tomorrow),
        },
      });
      if (ventas.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return ventas;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async obtenerTodasLasVentas(): Promise<Venta[]> {
    return this.ventaRepository.find({
      relations: ['detalleVenta', 'detalleVenta.producto'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
