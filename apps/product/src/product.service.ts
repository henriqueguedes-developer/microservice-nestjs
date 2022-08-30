import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  createProduct(createProductDto: CreateProductDto) {
    return createProductDto;
  }

}
