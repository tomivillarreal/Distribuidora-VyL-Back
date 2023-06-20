import { PartialType } from '@nestjs/mapped-types';
import { CreateCambioPrecioDto } from './create-cambio-precio.dto';

export class UpdateCambioPrecioDto extends PartialType(CreateCambioPrecioDto) {}
