import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
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
