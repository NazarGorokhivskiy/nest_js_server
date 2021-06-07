import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 24 })
  title: string;

  @Column('text')
  description: string;

  @Column("text")
  imageBase64: string;

  @Column('float')
  price: number;

  @Column("int")
  quantity: number;
}