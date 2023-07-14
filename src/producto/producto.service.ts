import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../utils/error.manager';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productRepository: Repository<Producto>,
  ) {}

  public async create(product: CreateProductoDto): Promise<Producto> {
    try {
      const newProduct = this.productRepository.create(product);
      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAllByEstante(idEstante: number): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find({
        relations: ['estante', 'categoria'],
        where: {
          estante: { id: idEstante },
        },
      });
      if (!products) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return products;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find({
        relations: ['estante', 'categoria', 'cambioPrecio'],
      });
      if (products.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return products;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAllVenta(): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find({
        relations: ['cambioPrecio'],
      });
      if (products.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }
      return products;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // public async findAll(): Promise<Producto[]> {
  //   try {
  //     const products: Producto[] = await this.productRepository
  //     .createQueryBuilder('producto')
  //     .innerJoin(
  //       'producto.cambioPrecio',
  //       'cambioPrecio').
  //       innerJoin(
  //         'producto.estante',
  //         'estante'
  //       )
  //     .getMany()
  //     ;
  //     if ( products.length === 0){
  //       throw new ErrorManager({
  //         type:'BAD_REQUEST',
  //         message: 'No se encontro resultado'
  //       })
  //     }
  //     return products
  //   } catch (error) {
  //     throw ErrorManager.createSignatureError(error.message)
  //   }
  // }

  public async findOne(idProducto: number): Promise<Producto> {
    try {
      const product: Producto = await this.productRepository.findOne({
        relations: ['estante', 'categoria'],
        where: { id: idProducto },
      });

      if (!product) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontro resultado',
        });
      }

      return product;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async update(
    id: number,
    updatedProduct: UpdateProductoDto,
  ): Promise<UpdateResult | undefined> {
    try {
      updatedProduct.updatedAt = new Date();
      const product: UpdateResult = await this.productRepository.update(
        id,
        updatedProduct,
      );
      if (product.affected == 0) {
        console.log('No se actualizo');
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo actualizar',
        });
      }
      console.log('Se actualizo');
      console.log(product);
      return product;
    } catch (error) {
      console.log('Error');
      console.log(error.message);
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async remove(id: string): Promise<DeleteResult | undefined> {
    try {
      const product: DeleteResult = await this.productRepository.delete(id);
      if (product.affected == 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se pudo borrar',
        });
      }
      return product;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
