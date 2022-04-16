import {Customer} from "./customer";
import {OrderedFoods} from "./orderedFoods";
import {KitchenQueue} from "./kitchenQueue";


export interface Order {

  id: number;


  deliveryTime: number;

  customer: Customer;

  orderedFoods: OrderedFoods[];
  kitchenQueue:KitchenQueue[];
  delivered: boolean;

}
