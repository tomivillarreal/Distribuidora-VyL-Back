import { BaseEntity } from "../../config/base.entity";
import { DetalleCompra } from "../../detalle-compra/entities/detalle-compra.entity";
import { Column, Entity, CreateDateColumn, OneToMany } from "typeorm";

@Entity()
export class Compra extends BaseEntity{  
    @CreateDateColumn({
        type:'date',
        name:'fecha'
    })
    fecha:Date;
    @CreateDateColumn({
        type:'timestamp',
        name:'hora'
    })
    hora:Date;
    @Column()
    descripcion: string
    @OneToMany(()=> DetalleCompra , (detalleCompra) => detalleCompra.producto)
    detalleCompra: DetalleCompra[]

}
