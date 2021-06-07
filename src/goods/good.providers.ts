import { Connection, Repository } from 'typeorm';
import { Good } from '../entities/good.entity';

export const goodProviders = [
  {
    provide: 'GOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Good),
    inject: ['DATABASE_CONNECTION'],
  },
];
