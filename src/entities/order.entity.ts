import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Good } from './good.entity';
import { OneToMany } from 'typeorm/browser';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  info: string;

  @Column("date")
  date: string;

  @Column('float')
  price: number;

  @Column("varchar")
  status: string;

  @Column("int", { array: true })
  goodsList: Good[];
}