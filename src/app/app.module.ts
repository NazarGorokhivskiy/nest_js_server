import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurfingBoardModule } from '../surfing_board/surfing_board.module';
import { GoodsModule } from '../goods/goods.module';

@Module({
  imports: [SurfingBoardModule, GoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
