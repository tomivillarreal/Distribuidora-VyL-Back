import { Venta } from '../../venta/entities/venta.entity';
import { BaseEntity } from '../../config/base.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class DetalleVenta extends BaseEntity {
  @Column()
  cantidad: number;

  @ManyToOne(() => Producto, (producto) => producto.detalleVenta)
  producto: Producto;
  @Column()
  precio: number;
  @ManyToOne(() => Venta, (venta) => venta.detalleVenta)
  venta: Venta;
}
