import { BaseEntity } from "../../config/base.entity";
import { DetalleVenta } from "../../detalle-venta/entities/detalle-venta.entity";
import { Column, CreateDateColumn, Entity, OneToMany, Timestamp } from "typeorm";

@Entity()
export class Venta extends BaseEntity{  

    @Column()
    descripcion: string

    @OneToMany(()=> DetalleVenta , (detalleVenta) => detalleVenta.producto)
    detalleVenta: DetalleVenta[]
    

}
