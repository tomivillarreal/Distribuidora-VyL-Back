import { Module } from '@nestjs/common';
import { EstanteService } from './estante.service';
import { EstanteController } from './estante.controller';
import { Estante } from './entities/estante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estante])],
  controllers: [EstanteController],
  providers: [EstanteService]
})
export class EstanteModule {}
