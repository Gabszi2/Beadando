import {Controller} from "./controller";
import {getRepository} from "typeorm";
import { Order } from "../entity/Order";

export class OrderController extends Controller{
  repository=getRepository(Order);


}
