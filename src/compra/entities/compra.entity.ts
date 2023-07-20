import { BaseTransactionEntity } from '../../config/base_transaccion.entity';
import { DetalleCompra } from '../../detalle-compra/entities/detalle-compra.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Compra extends BaseTransactionEntity {
  @Column()
  descripcion: string;
  @OneToMany(() => DetalleCompra, (detalleCompra) => detalleCompra.producto)
  detalleCompra: DetalleCompra[];
}
