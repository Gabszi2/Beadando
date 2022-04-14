import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  size: string;
  @Column()
  description: string;
  @Column()
  cookTime: number;
  @Column()
  price: number;


}
