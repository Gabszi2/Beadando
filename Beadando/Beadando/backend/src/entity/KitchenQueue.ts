import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./Order";
import {Food} from "./Food";

@Entity()
export class KitchenQueue {
  @PrimaryGeneratedColumn(
  )
  id:number;
  @ManyToOne(()=>Order,(order)=>order.orderedFoods,{onDelete:'CASCADE',eager:true})
  order:Order;
  @ManyToOne(()=>Food,{eager:true})
  food:Food;


}
