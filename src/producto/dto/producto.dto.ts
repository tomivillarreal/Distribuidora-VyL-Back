import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    nombre:string;
    @IsNotEmpty()
    @IsString()
    descripcion:string;
}

export class UpdateProductoDto{
    @IsOptional()
    @IsString()
    nombre:string;
    @IsOptional()
    @IsString()
    descripcion:string;
}