import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 24 })
  email: string;

  @Column('varchar')
  role: string;

  @Column("varchar")
  name: string;

  @Column('varchar')
  password: string;
}