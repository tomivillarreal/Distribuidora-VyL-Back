import { BaseEntity } from "src/config/base.entity";
import { Column, Entity, Timestamp } from "typeorm";

@Entity()
export class CambioPrecio extends BaseEntity{  

    @Column()
    fecha:Date;
    @Column()
    hora:Timestamp;


}

