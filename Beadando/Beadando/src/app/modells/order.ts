import {Customer} from "./customer";
import {OrderedFoods} from "./orderedFoods";


export interface Order {

  id: number;


  deliveryTime: number;

  customer: Customer;

  orderedFoods: OrderedFoods[];

  delivered: boolean;

}
