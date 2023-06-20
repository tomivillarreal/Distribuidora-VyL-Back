import { BaseEntity } from "src/config/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Producto extends BaseEntity{  
    @Column()
    nombre:string;
    @Column()
    descripcion:string;

}

