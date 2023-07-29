import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../utils/error.manager';
import { CambioPrecio } from 'src/cambio-precio/entities/cambio-precio.entity';
import { CreateCambioPrecioDto } from 'src/cambio-precio/dto/cambio-precio.dto';
@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productRepository: Repository<Producto>,
    @InjectRepository(CambioPrecio)
    private readonly cambioPrecioRepository: Repository<CambioPrecio>,
  ) {}

  public async create(producto: Producto, precio: number): Promise<Producto> {
    try {
      const productoDto = {
        ...producto,
        precio: undefined,
      };

      const product = await this.productRepository.create(productoDto);
      const savedProduct = await this.productRepository.save(product);
      const cambioPrecio = new CambioPrecio();
      cambioPrecio.precio = precio;
      cambioPrecio.producto = savedProduct;

      await this.cambioPrecioRepository.save(cambioPrecio);

      return savedProduct;
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
          cambioPrecio: { id: 'ASC' },
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
          cambioPrecio: { id: 'ASC' },
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
      const productos = await this.productRepository.find({
        select: ['id', 'nombre', 'foto', 'descripcion'],
        order: {
          id: 'ASC',
          cambioPrecio: { id: 'ASC' },
        },
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
    producData: Producto,
    precio: number,
  ): Promise<UpdateResult | undefined> {
    const existingProduct = await this.productRepository.findOne({
      relations: ['cambioPrecio'],
      where: { id: id },
    });
    if (
      existingProduct.cambioPrecio[existingProduct.cambioPrecio.length - 1]
        .precio !== precio
    ) {
      console.log('Hubo cambio de precio');
      const newPriceChange = new CambioPrecio();
      newPriceChange.precio = precio;
      newPriceChange.producto = existingProduct;
      await this.cambioPrecioRepository.save(newPriceChange);
    }

    const updatedProduct = { ...producData, cambioPrecio: undefined };
    console.log('return');
    return await this.productRepository.update(id, updatedProduct);
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
