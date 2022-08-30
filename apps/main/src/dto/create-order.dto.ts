import {
  IsNotEmpty,
} from 'class-validator';
export class CreateOrdertDto {

  @IsNotEmpty({ message: 'Name field is required' })
  name: string;

  description: string;

  @IsNotEmpty({ message: 'Price field is required' })
  price: number;

}