import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateEstanteDto {

    @IsNotEmpty()
    @IsString()
    nombre:string;
    @IsNotEmpty()
    @IsString()
    descripcion:string;
}

export class UpdateEstanteDto {
    @IsOptional()
    @IsString()
    nombre:string;
    @IsOptional()
    @IsString()
    descripcion:string;
}