import { Module } from '@nestjs/common';
import { SurfingBoardController } from './surfing_board.controller';
import { SurfingBoardService } from './surfing_board.service';

@Module({
  imports: [],
  controllers: [SurfingBoardController],
  providers: [SurfingBoardService],
})
export class SurfingBoardModule {}
