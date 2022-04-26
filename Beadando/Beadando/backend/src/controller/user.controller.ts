import {Controller} from "./controller";
import {getRepository} from "typeorm";
import {User} from "../entity/User";


export class UserController extends Controller{
  repository=getRepository(User);
login = async (req,res)=>{
  try {

  const user= await this.repository.findOne({userName: req.params.userName})
  if (!user) {
    this.handleError(res, 404, 'No entity found');
    return;
  }
  if (user.password===req.params.password)
  {
    res.json(user);
  }else
  { this.handleError(res, 400, 'Wrong password!');
    return;
  }

} catch (err) {
    console.error(err);
    this.handleError(res);
  }
}
register= async (req,res)=>{
  try {
    const user = await this.repository.findOne({userName:req.body.userName});
    if (user) {
      this.handleError(res, 400, 'User name already in use!');
      return;
    }
    const entity = this.repository.create(req.body);
    const entityAdded = await this.repository.save(entity);
    res.json(user)
  }catch (err) {
    console.error(err);
    this.handleError(res);
  }
}
remove=async (req,res)=>{

  try {
    const user= await this.repository.findOne({userName: req.params.userName})
    if (!user) {
      this.handleError(res, 404, 'No entity found');
      return;
    }
    await this.repository.delete(user);
    res.json(user)

  }catch (err) {
    console.error(err);
    this.handleError(res);
  }
}

}
