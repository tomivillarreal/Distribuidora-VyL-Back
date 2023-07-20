import { BaseTransactionEntity } from '../../config/base_transaccion.entity';
import { Compra } from '../../compra/entities/compra.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class DetalleCompra extends BaseTransactionEntity {
  @Column()
  cantidad: number;
  @Column()
  precio: number;
  @ManyToOne(() => Producto, (producto) => producto.detalleCompra)
  producto: Producto;
  @ManyToOne(() => Compra, (compra) => compra.detalleCompra)
  compra: Compra;
}
