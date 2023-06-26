import { IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsString()
    nombre:string;
    @IsNotEmpty()
    @IsString()
    descripcion:string;
}


export class UpdateCategoriaDto {

    @IsOptional()
    @IsString()
    nombre:string;
    @IsOptional()
    @IsString()
    descripcion:string;
}

