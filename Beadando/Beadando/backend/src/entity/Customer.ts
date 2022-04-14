import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  tel: string;

}
