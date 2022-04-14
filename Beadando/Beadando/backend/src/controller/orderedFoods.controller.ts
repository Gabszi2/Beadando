import {Controller} from "./controller";
import {getRepository} from "typeorm";
import {OrderedFoods} from "../entity/OrderedFoods";

export class OrderedFoodsController extends Controller{
  repository=getRepository(OrderedFoods)
}
