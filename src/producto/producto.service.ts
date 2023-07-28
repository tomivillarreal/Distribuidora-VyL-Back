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
        relations: ['estante', 'categoria', 'cambioPrecio'],
        order: {
          id: 'ASC',
        },
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

  public async findAllByCategoria(idCategoria: number): Promise<Producto[]> {
    try {
      const products: Producto[] = await this.productRepository.find({
        relations: ['estante', 'categoria', 'cambioPrecio'],
        order: {
          id: 'ASC',
        },
        where: {
          categoria: { id: idCategoria },
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
      // const products = await this.productRepository
      //   .createQueryBuilder('producto')

      //   .getMany();

      // if (products.length === 0) {
      //   throw new ErrorManager({
      //     type: 'BAD_REQUEST',
      //     message: 'No se encontro resultado',
      //   });
      // }
      // return products;

      const productos = await this.productRepository.find({
        select: ['id', 'nombre', 'foto', 'descripcion'],
        relations: [
          'detalleCompra',
          'detalleVenta',
          'estante',
          'categoria',
          'cambioPrecio',
        ],
      });

      const stockDisponible = productos.map((producto) => {
        const cantidadComprada = producto.detalleCompra.reduce(
          (total, detalleCompra) => total + detalleCompra.cantidad,
          0,
        );
        const cantidadVendida = producto.detalleVenta.reduce(
          (total, detalleVenta) => total + detalleVenta.cantidad,
          0,
        );
        const stock = cantidadComprada - cantidadVendida;

        return {
          ...producto,
          foto: `http://localhost:8000/imagen/${producto.foto}`,
          stock_disponible: stock,
        };
      });
      return stockDisponible;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // public async findAll(): Promise<Producto[]> {
  //   try {
  //     const products: Producto[] = await this.productRepository.find({
  //       relations: ['estante', 'categoria', 'cambioPrecio'],
  //     });
  //     if (products.length === 0) {
  //       throw new ErrorManager({
  //         type: 'BAD_REQUEST',
  //         message: 'No se encontro resultado',
  //       });
  //     }
  //     return products;
  //   } catch (error) {
  //     throw ErrorManager.createSignatureError(error.message);
  //   }
  // }

  //   SELECT
  //   p.id,
  //   p.nombre AS nombre_producto,
  //   (SELECT COALESCE(SUM(cantidad), 0) FROM detalle_compra WHERE producto_id = p.id) -
  //   (SELECT COALESCE(SUM(cantidad), 0) FROM detalle_venta WHERE producto_id = p.id) AS stock_disponible
  // FROM
  //   producto p;

  public async findAllVenta(): Promise<Producto[]> {
    // try {
    //   const products: Producto[] = await this.productRepository.find({
    //     relations: ['cambioPrecio'],
    //   });
    //   if (products.length === 0) {
    //     throw new ErrorManager({
    //       type: 'BAD_REQUEST',
    //       message: 'No se encontro resultado',
    //     });
    //   }
    //   return products;
    // } catch (error) {
    //   throw ErrorManager.createSignatureError(error.message);
    // }

    const productos = await this.productRepository.find({
      relations: ['detalleCompra', 'detalleVenta', 'cambioPrecio'],
    });

    const stockDisponible = productos.map((producto) => {
      const cantidadComprada = producto.detalleCompra.reduce(
        (total, detalleCompra) => total + detalleCompra.cantidad,
        0,
      );
      const cantidadVendida = producto.detalleVenta.reduce(
        (total, detalleVenta) => total + detalleVenta.cantidad,
        0,
      );
      const stock = cantidadComprada - cantidadVendida;

      return {
        ...producto,
        stock_disponible: stock,
      };
    });
    return stockDisponible;
  }
  catch(error) {
    throw ErrorManager.createSignatureError(error.message);
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
    updatedProduct: Producto,
  ): Promise<UpdateResult | undefined> {
    try {
      // updatedProduct.updatedAt = new Date();
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
