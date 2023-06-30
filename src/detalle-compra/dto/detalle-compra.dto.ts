import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateDetalleCompraDto {
    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
    @IsNotEmpty()
    @IsNumber()
    precioUnitario: number;
    @IsNotEmpty()
    @IsNumber()
    producto: Producto;

}
