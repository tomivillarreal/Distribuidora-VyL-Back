import { BaseEntity } from "../../config/base.entity";
import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, ManyToOne, Timestamp } from "typeorm";

@Entity()
export class DetalleCompra extends BaseEntity{  

    @Column()
    cantidad:number;
    @Column()
    precioUnitario:number;
    @ManyToOne(()=> Producto , (producto) => producto.detalleCompra)
    producto: Producto


}
