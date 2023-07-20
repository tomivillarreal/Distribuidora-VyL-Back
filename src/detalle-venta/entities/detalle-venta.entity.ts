import { Venta } from '../../venta/entities/venta.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseTransactionEntity } from '../../config/base_transaccion.entity';

@Entity()
export class DetalleVenta extends BaseTransactionEntity {
  @Column()
  cantidad: number;
  @ManyToOne(() => Producto, (producto) => producto.detalleVenta)
  producto: Producto;
  @Column()
  precio: number;
  @ManyToOne(() => Venta, (venta) => venta.detalleVenta)
  venta: Venta;
}
