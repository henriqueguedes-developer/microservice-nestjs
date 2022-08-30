import { Inject, Injectable } from '@nestjs/common';
import { CreateOrdertDto } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MainService {
  constructor(
    @Inject('BILLING') private billingClient: ClientProxy,
  ) { }

  async createOrder(request: CreateOrdertDto) {
    this.billingClient.emit('order_created', {
      request,
    })


  }
}
