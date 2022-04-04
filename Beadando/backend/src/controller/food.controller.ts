import {Controller} from "./controller";
import {getRepository} from "typeorm";
import { Food } from "../entity/Food";

export class FoodController extends Controller {
  repository = getRepository(Food);
}
