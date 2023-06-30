import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../utils/error.manager';
import { Estante } from 'src/estante/entities/estante.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Injectable()
export class ProductoService {

  constructor(
    @InjectRepository(Producto) private productRepository: Repository<Producto>,
    ) { }

  public async create(product: CreateProductoDto): Promise<Producto> {
    try {
      const newProduct = this.productRepository.create(product)
      return await this.productRepository.save(newProduct)
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findAll(): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find({
        relations: ['estante', 'categoria'],
      });
      if ( products.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      return products
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findOne(id: string): Promise<Producto> {
    try {
      const product: Producto = await this.productRepository.
      createQueryBuilder('product')
      .where({id})
      .getOne()
      if (!product){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }

      return product
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async update(id: string, updatedProduct: UpdateProductoDto): Promise<UpdateResult | undefined>  {
    try {
      const product: UpdateResult = await this.productRepository.update(id, updatedProduct)
      if (product.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo actualizar'
        })
      }
      return product
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async remove(id: string): Promise<DeleteResult | undefined>  {
    try {
      const product: DeleteResult = await this.productRepository.delete(id)
      if (product.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo borrar'
        })
      }
      return product
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }
}
