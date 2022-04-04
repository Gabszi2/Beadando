import {Controller} from "./controller";
import {getRepository} from "typeorm";
import {Config} from "../entity/Config";

export class ConfigController extends Controller {
  repository = getRepository(Config);
}
