import { Venta } from "../../venta/entities/venta.entity";
import { BaseEntity } from "../../config/base.entity";
import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, Timestamp } from "typeorm";

@Entity()
export class DetalleVenta extends BaseEntity{  
    @Column()
    cantidad:number;

    @ManyToOne(()=> Producto , (producto) => producto.detalleVenta)
    producto: Producto

    @ManyToOne(()=> Venta , (venta) => venta.detalleVenta)
    venta: Venta
}

