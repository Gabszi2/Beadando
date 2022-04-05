import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Customer} from "./Customer";
import {Food} from "./Food";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

@Column()
deliveryTime:number;
@OneToOne(()=>Customer)
@JoinColumn()
  customer:Customer;
@ManyToMany(()=>Food)
@JoinTable()
  orderedFoods:Food[];
@Column()
  delivered:boolean;

}
