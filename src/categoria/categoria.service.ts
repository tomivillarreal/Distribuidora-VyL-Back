import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class CategoriaService {

  constructor(@InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>) { }

  public async create(categoria: CreateCategoriaDto): Promise<Categoria> {
    try {
      const newCategoria = this.categoriaRepository.create(categoria)
      return await this.categoriaRepository.save(newCategoria)
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

  public async findAll(): Promise<Categoria[]> {
    try {
      const categorias: Categoria[] = await this.categoriaRepository.find()
      if (categorias.length === 0){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }
      return categorias
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async findOne(id: string): Promise<Categoria> {
    try {
      const categoria: Categoria = await this.categoriaRepository.
      createQueryBuilder('estante')
      .where({id})
      .getOne()
      if (!categoria){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontro resultado'
        })
      }

      return categoria
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }


  public async update(id: string, updatedCategoria: UpdateCategoriaDto): Promise<UpdateResult | undefined>  {
    try {
      const categoria: UpdateResult = await this.categoriaRepository.update(id, updatedCategoria)
      if (categoria.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo actualizar'
        })
      }
      return categoria
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  public async remove(id: string): Promise<DeleteResult | undefined>  {
    try {
      const categoria: DeleteResult = await this.categoriaRepository.delete(id)
      if (categoria.affected == 0 ){
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se pudo borrar'
        })
      }
      return categoria
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }
}
