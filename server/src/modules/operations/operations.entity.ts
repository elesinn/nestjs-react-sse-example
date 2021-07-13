import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OperationStatus } from './operations.constants';

@Entity()
export class Operations {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column({ default: OperationStatus.IN_PROGRESS }) status: OperationStatus;
}
