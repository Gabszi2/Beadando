import {Router} from "express";
import {CustomerController} from "./src/controller/customer.controller";
import {FoodController} from "./src/controller/food.controller";
import {OrderController} from "./src/controller/order.controller";
import {OrderedFoodsController} from "./src/controller/orderedFoods.controller";
import {ConfigController} from "./src/controller/config.controller";

export function getRouter() {
  const router = Router();

  const customerController = new CustomerController();
  const foodController = new FoodController();
  const orderController = new OrderController();
  const orderedFoodsController=new OrderedFoodsController();
  const configController=new ConfigController();

  router.get('/customers', customerController.getAll);
  router.post('/customers', customerController.create);
  router.delete('/customers/:id', customerController.delete);

  router.get('/foods', foodController.getAll);
  router.post('/foods', foodController.create);
  router.delete('/foods/:id', foodController.delete);

  router.get('/orders', orderController.getAll);
  router.post('/orders', orderController.create);
  router.delete('/orders/:id', orderController.delete);

  router.get('/orderedFoods',orderedFoodsController.getAll);
  router.post('/orderedFoods',orderedFoodsController.create);
  router.delete('/orderedFoods/:id',orderedFoodsController.delete);

  router.get('/config',configController.getAll);
  router.put('/config',configController.update);

  return router;
}
