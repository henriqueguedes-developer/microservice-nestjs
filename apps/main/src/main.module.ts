import { RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MainController } from './main.controller';
import { MainService } from './main.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/main/.env',
    }),
    RmqModule.register({
      name: 'BILLING',
    }),
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule { }
