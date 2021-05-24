import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SurfingBoardModule} from './surfing_board/surfing_board.module'

@Module({
  imports: [SurfingBoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
