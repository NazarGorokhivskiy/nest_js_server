import { Injectable } from '@nestjs/common';
import { SurfingBoardType } from './declarations';

@Injectable()
export class SurfingBoardService {
  getAll(): SurfingBoardType[] {
    return [
      {
        name: 'First board',
        length: 280,
        price: 1200,
      },
    ];
  }
}
