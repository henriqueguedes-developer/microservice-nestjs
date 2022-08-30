import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';


@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    //private readonly logger = new Logger(BillingService.name);
  ) { }

  async createProduct(data: any) {
    console.log('data', data);
    //this.logger.log('Billing...', data);
    /*  const validateProduct = await this.findOneProduct(createProductDto.name);
      if (validateProduct) {
        throw new BadRequestException('Product already exists');
      }
      const session = await this.productRepository.startTransaction();
      try {
        const product = await this.productRepository.create(createProductDto, { session });
        await session.commitTransaction();
        return product;
      }
      catch (error) {
        await session.abortTransaction();
        throw error;
      }*/
  }
  async getProducts() {
    return this.productRepository.find({
    });
  }

  async findOneProduct(name: string) {
    return this.productRepository.findOne({
      name,
    });
  }

}
