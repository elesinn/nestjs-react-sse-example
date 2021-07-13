import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SseModule } from '../sse/sse.module';
import { OperationSubscriber } from './operation.subscriber';
import { OperationsController } from './operations.controller';
import { Operations } from './operations.entity';
import { OperationsService } from './operations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Operations]), SseModule],
  controllers: [OperationsController],
  providers: [OperationsService, OperationSubscriber],
  exports: [OperationsService],
})
export class OperationsModule {}
