import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "./Customer";
import {Food} from "./Food";
import {OrderedFoods} from "./OrderedFoods";
import {KitchenQueue} from "./KitchenQueue";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deliveryTime: number;
  @OneToOne(() => Customer,{eager:true})
  @JoinColumn()
  customer: Customer;
  @OneToMany(()=>OrderedFoods,(orderedFood)=>orderedFood.order,{cascade:true})
  orderedFoods: OrderedFoods[];
  @OneToMany(()=>KitchenQueue,(kitchenQueue)=>kitchenQueue.order,{cascade:true})
  kitchenQueue:KitchenQueue[];
  @Column()
  delivered: boolean;

}
