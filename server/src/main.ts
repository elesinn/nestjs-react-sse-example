import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: 'http://localhost:3000',
    credentials: false,
  };
  app.enableCors(options);
  await app.listen(3001);
}
bootstrap();
