import { IsNotEmpty, IsString, IsUUID, IsOptional } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Estante } from "src/estante/entities/estante.entity";


export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    codigoProducto:string;
    @IsNotEmpty()
    @IsString()
    nombre:string;
    @IsNotEmpty()
    @IsString()
    descripcion:string;
    @IsNotEmpty()
    @IsUUID()
    categoria: Categoria;
    @IsNotEmpty()
    @IsUUID()
    estante: Estante;
    
}

export class UpdateProductoDto{
    @IsOptional()
    @IsString()
    codigoProducto:string;
    @IsOptional()
    @IsString()
    nombre:string;
    @IsOptional()
    @IsString()
    descripcion:string;
    @IsOptional()
    @IsUUID()
    categoriaid: Categoria;
    @IsOptional()
    @IsUUID()
    estanteid: Estante;
    
}