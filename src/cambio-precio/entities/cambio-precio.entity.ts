import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, Timestamp, ManyToOne, CreateDateColumn } from "typeorm";
import { Producto } from "../../producto/entities/producto.entity";

@Entity()
export class CambioPrecio extends BaseEntity{  

    // @CreateDateColumn({
    //     type:'date',
    //     name:'fecha'
    // })
    // fecha:Date;
    // @CreateDateColumn({
    //     type:'timestamp',
    //     name:'hora'
    // })
    // hora:Date;
    @Column()
    precio:Number;
    @ManyToOne(()=> Producto, (producto) => producto.cambioPrecio)
    producto: Producto

}

