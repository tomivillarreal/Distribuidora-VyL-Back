import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Estante } from 'src/estante/entities/estante.entity';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  foto: string;
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  descripcion: string;
  @IsNotEmpty()
  @IsNumber()
  categoria: Categoria;
  @IsNotEmpty()
  @IsNumber()
  estante: Estante;
}

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  foto: string;
  @IsOptional()
  @IsString()
  nombre: string;
  @IsOptional()
  @IsString()
  descripcion: string;
  @IsOptional()
  @IsNumber()
  categoria: Categoria;
  @IsOptional()
  @IsNumber()
  estante: Estante;
  updatedAt: Date;
}
