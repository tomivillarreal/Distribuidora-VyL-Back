import { BaseTransactionEntity } from '../../config/base_transaccion.entity';
import { DetalleVenta } from '../../detalle-venta/entities/detalle-venta.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Venta extends BaseTransactionEntity {
  @Column()
  descripcion: string;

  @OneToMany(() => DetalleVenta, (detalleVenta) => detalleVenta.venta)
  detalleVenta: DetalleVenta[];
}
