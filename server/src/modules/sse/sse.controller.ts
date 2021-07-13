import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';
import { SseService } from './sse.service';

@Controller()
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return this.sseService.sendEvents();
  }
}
