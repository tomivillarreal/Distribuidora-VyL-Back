import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseTransactionEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;
}
