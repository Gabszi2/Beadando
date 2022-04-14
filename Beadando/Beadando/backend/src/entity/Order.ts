import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "./Customer";
import {Food} from "./Food";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deliveryTime: number;
  @OneToOne(() => Customer,{eager:true})
  customer: Customer;
  @ManyToMany(() => Food,{eager:true,cascade:true})
  orderedFoods: Food[];
  @Column()
  delivered: boolean;

}
