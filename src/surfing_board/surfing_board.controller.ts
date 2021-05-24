import { Controller, Get } from '@nestjs/common';
import { SurfingBoardService } from './surfing_board.service';
import { SurfingBoardType } from './declarations';

@Controller("surfing_boards")
export class SurfingBoardController {
  constructor(private readonly boardService: SurfingBoardService) {}

  @Get()
  getAll(): SurfingBoardType[] {
    return this.boardService.getAll();
  }
}
