import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';
import { SseService } from '../sse/sse.service';
import { Operations } from './operations.entity';

@Injectable()
@EventSubscriber()
export class OperationSubscriber
  implements EntitySubscriberInterface<Operations>
{
  constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly sseService: SseService,
  ) {
    connection.subscribers.push(this);
  }

  listenTo(): any {
    return Operations;
  }

  afterUpdate(event: UpdateEvent<Operations>): Promise<any> | void {
    const statusGotUpdated = event.updatedColumns.find(
      (value) => value.propertyName,
      Operations.prototype.status,
    );
    if (statusGotUpdated) {
      if (event.databaseEntity.status !== event.entity.status) {
        this.sseService.addEvent({
          data: event.entity,
        });
      }
    }
  }
}
