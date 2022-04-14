import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "./Customer";
import {Food} from "./Food";
import {OrderedFoods} from "./OrderedFoods";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deliveryTime: number;
  @OneToOne(() => Customer,{eager:true})
  @JoinColumn()
  customer: Customer;
  @OneToMany(()=>OrderedFoods,(orderedFood)=>orderedFood.order,{eager:true,cascade:true})
  orderedFoods: OrderedFoods[];
  @Column()
  delivered: boolean;

}
