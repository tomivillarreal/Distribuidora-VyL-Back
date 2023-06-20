import { BaseEntity } from "src/config/base.entity";
import { Column, Entity, Timestamp } from "typeorm";

@Entity()
export class DetalleCompra extends BaseEntity{  

    @Column()
    cantidad:number;
    @Column()
    precioUnitario:number;


}
