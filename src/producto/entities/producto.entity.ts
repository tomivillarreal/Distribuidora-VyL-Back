import { BaseEntity } from "../../config/base.entity";
import { Estante } from "../../estante/entities/estante.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { CambioPrecio } from "../../cambio-precio/entities/cambio-precio.entity";
import { DetalleCompra } from "../../detalle-compra/entities/detalle-compra.entity";
import { DetalleVenta } from "../../detalle-venta/entities/detalle-venta.entity";


@Entity()
export class Producto extends BaseEntity{  

    @Column()
    codigoProducto:string;
    @Column()
    nombre:string;
    @Column()
    descripcion:string;
    @ManyToOne(()=> Categoria, (categoria) => categoria.productos)
    categoria: Categoria
    @ManyToOne(()=> Estante , (estante) => estante.productos)
    estante: Estante
    @OneToMany(()=> CambioPrecio , (cambioPrecio) => cambioPrecio.producto)
    cambioPrecio: CambioPrecio[]
    
    @OneToMany(()=> DetalleCompra , (detalleCompra) => detalleCompra.producto)
    detalleCompra: DetalleCompra[]

        
    @OneToMany(()=> DetalleVenta , (detalleVenta) => detalleVenta.producto)
    detalleVenta: DetalleVenta[]
}

