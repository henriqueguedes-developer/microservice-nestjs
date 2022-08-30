import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateOrdertDto } from './dto/create-order.dto';
import { MainService } from './main.service';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) { }

  @Post()
  async createOrder(request: CreateOrdertDto) {
    return this.mainService.createOrder(request);
  }
}
