import { IsNotEmpty, IsNumber } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateDetalleVentaDto {

    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
    @IsNotEmpty()
    @IsNumber()
    producto: Producto;
    
}
