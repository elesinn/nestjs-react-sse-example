import { Controller, MessageEvent, Sse } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Observable, interval, map } from 'rxjs';
import { OperationStatus } from './operations.constants';

import { Operations } from './operations.entity';
import { OperationsService } from './operations.service';

@Crud({
  model: {
    type: Operations,
  },
})
@Controller('operations')
export class OperationsController implements CrudController<Operations> {
  constructor(public service: OperationsService) {}

  get base(): CrudController<Operations> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Operations,
  ) {
    const operation = await this.base.createOneBase(req, dto);

    setTimeout(() => {
      //Choose random status
      const status = !Math.round(Math.random())
        ? OperationStatus.DONE
        : OperationStatus.FAILED;

      this.base.updateOneBase(req, {
        id: operation.id,
        name: operation.name,
        status,
      });
    }, 5000);

    return operation;
  }
}
