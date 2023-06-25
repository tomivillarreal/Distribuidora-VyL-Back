import { Injectable } from '@nestjs/common';
import { CreateEstanteDto, UpdateEstanteDto } from './dto/estante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estante } from './entities/estante.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class EstanteService {

  constructor(@InjectRepository(Estante) private estanteRepository: Repository<Estante>) { }

  public async create(estante: CreateEstanteDto): Promise<Estante> {
    try {
      const newEstante = this.estanteRepository.create(estante)
      return await this.estanteRepository.save(newEstante)
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

  public async findAll(): Promise<Estante[]> {
    try {
      const estantes: Estante[] = await this.estanteRepository.find()
      if (estantes.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      return estantes
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findOne(id: string): Promise<Estante> {
    try {
      const estante: Estante = await this.estanteRepository.
      createQueryBuilder('estante')
      .where({id})
      .getOne()
      if (!estante){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }

      return estante
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async update(id: string, updatedEstante: UpdateEstanteDto): Promise<UpdateResult | undefined>  {
    try {
      const estante: UpdateResult = await this.estanteRepository.update(id, updatedEstante)
      if (estante.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo actualizar'
        })
      }
      return estante
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async remove(id: string): Promise<DeleteResult | undefined>  {
    try {
      const estante: DeleteResult = await this.estanteRepository.delete(id)
      if (estante.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo borrar'
        })
      }
      return estante
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }


}
