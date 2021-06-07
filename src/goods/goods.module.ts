import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { goodProviders } from './good.providers';
import { GoodsService } from './goods.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...goodProviders,
    GoodsService,
  ],
})
export class GoodsModule {}