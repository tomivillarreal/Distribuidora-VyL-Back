import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { DetalleVenta } from "src/detalle-venta/entities/detalle-venta.entity";


export class CreateVentaDto {
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    @IsNotEmpty()
    @IsNumber()
    detalleVenta: DetalleVenta;

}
