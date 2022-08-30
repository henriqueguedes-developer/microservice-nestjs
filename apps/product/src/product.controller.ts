import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
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
