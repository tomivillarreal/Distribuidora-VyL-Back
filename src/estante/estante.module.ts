import { Module } from '@nestjs/common';
import { EstanteService } from './estante.service';
import { EstanteController } from './estante.controller';

@Module({
  controllers: [EstanteController],
  providers: [EstanteService]
})
export class EstanteModule {}
