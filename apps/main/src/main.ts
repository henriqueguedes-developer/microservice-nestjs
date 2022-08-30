import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

}
bootstrap();
