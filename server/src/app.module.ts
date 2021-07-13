import { SseModule } from './modules/sse/sse.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationSubscriber } from './modules/operations/operation.subscriber';
import { Operations } from './modules/operations/operations.entity';
import { OperationsModule } from './modules/operations/operations.module';

@Module({
  imports: [
    SseModule,
    OperationsModule,
    TypeOrmModule.forRoot({
      type: 'sqljs',
      location: './test_db.sqlite',
      synchronize: true,
      autoSave: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
