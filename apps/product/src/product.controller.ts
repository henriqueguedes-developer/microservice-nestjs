import { Controller, Get, Param } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly rmqService: RmqService) { }

  @EventPattern('order_created')
  async createProduct(@Payload() data: any, @Ctx() context: RmqContext) {
    this.productService.createProduct(data);
    this.rmqService.ack(context);
  }

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  @Get(':name')
  async findOneProduct(@Param('name') name: string) {
    return this.productService.findOneProduct(name);
  }

}
