import { IsNotEmpty, IsNumber } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateCambioPrecioDto {
    @IsNotEmpty()
    @IsNumber()
    precio:number;
    @IsNotEmpty()
    @IsNumber()
    producto:Producto;
}
