import { BaseEntity } from "src/config/base.entity";
import { Column, Entity, Timestamp } from "typeorm";

@Entity()
export class DetalleVenta extends BaseEntity{  
    @Column()
    cantidad:number;
}
