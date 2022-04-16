import {Order} from "./order";
import {Food} from "./food";

export interface KitchenQueue{
  id:number;
  order:Order;

  food:Food;

}
