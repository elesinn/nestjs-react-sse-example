import { SseController } from './sse.controller';
import { SseService } from './sse.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [SseController],
  providers: [SseService],
  exports: [SseService],
})
export class SseModule {}
