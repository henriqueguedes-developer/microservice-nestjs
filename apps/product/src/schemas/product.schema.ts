import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Product extends AbstractDocument {
  @Prop()
  nome: string;

  @Prop()
  descricao: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);