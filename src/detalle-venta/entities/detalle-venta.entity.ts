import { BaseEntity } from "../../config/base.entity";
import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, Timestamp } from "typeorm";

@Entity()
export class DetalleVenta extends BaseEntity{  
    @Column()
    cantidad:number;

    @ManyToOne(()=> Producto , (producto) => producto.detalleVenta)
    producto: Producto
}

