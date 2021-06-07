import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Good } from '../entities/good.entity';

@Injectable()
export class GoodsService {
  constructor(
    @Inject('GOOD_REPOSITORY')
    private goodsRepository: Repository<Good>,
  ) {}

  async findAll(): Promise<Good[]> {
    return this.goodsRepository.find();
  }
}