import {Customer} from "./customer";
import {Food} from "./food";


export interface Order {

  id: number;


  deliveryTime: number;

  customer: Customer;

  orderedFoods: Food[];

  delivered: boolean;

}
