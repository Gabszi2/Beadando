import {Controller} from "./controller";
import {Equal, getRepository} from "typeorm";
import { Order } from "../entity/Order";


export class OrderController extends Controller{
  repository=getRepository(Order);

  deleteDelivered= async (req,res)=>{
    try {
      const entities = await this.repository.find();
      for (let i=0;i<entities.length;i++){
       let entity=entities[i];
       if (entity.delivered===true){
       await this.repository.delete(entity);
       }
      }
      res.json({success:true})

    }catch (err) {
      console.error(err);
      this.handleError(res);
    }
  }
}
