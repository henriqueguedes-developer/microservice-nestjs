import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async createProduct() {
    return this.productService.createProduct();
  }
}
