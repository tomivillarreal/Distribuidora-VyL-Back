import { Injectable } from '@nestjs/common';
import { CreateCambioPrecioDto } from './dto/cambio-precio.dto';
import { CambioPrecio } from './entities/cambio-precio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';


@Injectable()
export class CambioPrecioService {

  constructor(
    @InjectRepository(CambioPrecio) private cambioPrecioRepository: Repository<CambioPrecio>,
    ) { }


  public async create(cambioPrecio: CreateCambioPrecioDto): Promise<CambioPrecio> {
    try {
      const newCambioPrecio = this.cambioPrecioRepository.create(cambioPrecio);
      return await this.cambioPrecioRepository.save(newCambioPrecio)
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  // async create(cambioPrecio: CreateCambioPrecioDto): Promise<CambioPrecio> {

  //   return this.cambioPrecioRepository.save(cambioPrecio);
  // }

  public async findAll(): Promise<CambioPrecio[]> {
    try {
      const cambioPrecios: CambioPrecio[] = await this.cambioPrecioRepository.find({
      });
      if ( cambioPrecios.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      return cambioPrecios
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findByProducto(idProducto: number): Promise<CambioPrecio[]> {
    try {
      const cambioPrecios: CambioPrecio[] = await this.cambioPrecioRepository.find({
        relations: ['producto'],
        where: {
          producto: {id: idProducto}}
      })

      if (cambioPrecios.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      return cambioPrecios

    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findByProductLast(idProducto: number): Promise<CambioPrecio> {
    try {
      const cambioPrecios: CambioPrecio[] = await this.cambioPrecioRepository.find({
        relations: ['producto'],
        where: {
          producto: {id: idProducto}}
      })

      if (cambioPrecios.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      var ultimoCambio = cambioPrecios[cambioPrecios.length - 1]
      return ultimoCambio

    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  // public async findOne(id: number): Promise<CambioPrecio> {
  //   try {
  //     const product: CambioPrecio = await this.cambioPrecioRepository.
  //     createQueryBuilder('cambio_precio')
  //     .where({id})
  //     .getOne()
  //     if (!product){
  //       throw new ErrorManager({
  //         type:'BAD_REQUEST',
  //         message: 'No se encontro resultado'
  //       })
  //     }

  //     return product
  //   } catch (error) {
  //     throw ErrorManager.createSignatureError(error.message)
  //   }
  // }




  remove(id: number) {
    return `This action removes a #${id} cambioPrecio`;
  }
}
