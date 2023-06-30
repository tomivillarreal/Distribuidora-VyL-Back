import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { DetalleCompra } from "src/detalle-compra/entities/detalle-compra.entity";


export class CreateCompraDto {
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    @IsNotEmpty()
    @IsNumber()
    detalleCompra: DetalleCompra;

}
