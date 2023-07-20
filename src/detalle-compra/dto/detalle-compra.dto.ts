import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Compra } from 'src/compra/entities/compra.entity';
import { Producto } from 'src/producto/entities/producto.entity';

export class CreateDetalleCompraDto {
  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
  @IsNotEmpty()
  @IsNumber()
  precio: number;
  @IsNotEmpty()
  @IsNumber()
  producto: Producto;
  @IsNotEmpty()
  @IsNumber()
  compra: Compra;
}
