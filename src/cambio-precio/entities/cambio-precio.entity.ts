import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, Timestamp, ManyToOne, CreateDateColumn } from "typeorm";
import { Producto } from "../../producto/entities/producto.entity";

@Entity()
export class CambioPrecio extends BaseEntity{  
    @Column()
    precio:Number;
    @ManyToOne(()=> Producto, (producto) => producto.cambioPrecio)
    producto: Producto

}

