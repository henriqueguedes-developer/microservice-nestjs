import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  createProduct() {
    return 'This action adds a new product';
  }

}
