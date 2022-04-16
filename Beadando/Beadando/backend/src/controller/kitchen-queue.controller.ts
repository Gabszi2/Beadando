import {Controller} from "./controller";
import {getRepository} from "typeorm";
import {KitchenQueue} from "../entity/KitchenQueue";

export class KitchenQueueController extends Controller{
  repository=getRepository(KitchenQueue)
}
