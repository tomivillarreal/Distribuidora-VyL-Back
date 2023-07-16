import { IsNotEmpty, IsNumber } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";
import { Venta } from "src/venta/entities/venta.entity";

export class CreateDetalleVentaDto {

    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
    @IsNotEmpty()
    @IsNumber()
    producto: Producto;
    @IsNotEmpty()
    @IsNumber()
    venta: Venta;
    
}
