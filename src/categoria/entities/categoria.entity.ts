import { BaseEntity } from "../../config/base.entity";
import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, OneToMany } from "typeorm";


@Entity()
export class Categoria extends BaseEntity{  
    @Column()
    nombre:string;
    @Column()
    descripcion:string;
    @OneToMany(()=> Producto, (producto) => producto.categoria)
    productos: Producto[]
}

