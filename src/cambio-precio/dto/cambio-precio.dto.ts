import { IsNotEmpty, IsNumber } from "class-validator";
import { Column } from "typeorm";



export class CreateCambioPrecioDto {
    @IsNotEmpty()
    @IsNumber()
    precio:number;
}
