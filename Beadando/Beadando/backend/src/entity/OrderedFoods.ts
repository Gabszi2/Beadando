import {Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import {Food} from "./Food";

@Entity()
export class OrderedFoods {
@PrimaryGeneratedColumn()
  id:number
  @ManyToOne(()=>Order,(order)=>order.orderedFoods,{onDelete:'CASCADE'})
  order:Order;
  @ManyToOne(()=>Food,{eager:true})
  food:Food;


}
