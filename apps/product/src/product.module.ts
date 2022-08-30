import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        // PORT: Joi.number().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/product/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    RmqModule

  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule { }
