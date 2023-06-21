import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductoService {

  constructor(@InjectRepository(Producto) private productRepository: Repository<Producto>) { }

  public async create(product: CreateProductoDto): Promise<Producto> {
    try {
      const newProduct = this.productRepository.create(product)
      return await this.productRepository.save(newProduct)
    } catch (error) {
      throw new InternalServerErrorException('no se puede crear')
    }
  }

  public async findAll(): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find()
      if ( products.length === 0){
        throw new InternalServerErrorException('no se encontro productos')
      }
      return products
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  public async findOne(id: string): Promise<Producto> {
    try {
      const product: Producto = await this.productRepository.
      createQueryBuilder('product')
      .where({id})
      .getOne()
      if (!product){
        throw new InternalServerErrorException('no se encontro resultado')
      }

      return product
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  public async update(id: string, updatedProduct: UpdateProductoDto): Promise<UpdateResult | undefined>  {
    try {
      const product: UpdateResult = await this.productRepository.update(id, updatedProduct)
      if (product.affected == 0 ){
        throw new InternalServerErrorException('no se pudo actualizar')
      }
      return product
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  public async remove(id: string): Promise<DeleteResult | undefined>  {
    try {
      const product: DeleteResult = await this.productRepository.delete(id)
      if (product.affected == 0 ){
        throw new InternalServerErrorException('no se pudo borrar')
      }
      return product
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }
}
