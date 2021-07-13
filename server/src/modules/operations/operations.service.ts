import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Operations } from './operations.entity';

@Injectable()
export class OperationsService extends TypeOrmCrudService<Operations> {
  constructor(@InjectRepository(Operations) repo) {
    super(repo);
  }
}
