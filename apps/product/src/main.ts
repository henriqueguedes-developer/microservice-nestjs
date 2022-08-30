import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  await app.startAllMicroservices();
}
bootstrap();
