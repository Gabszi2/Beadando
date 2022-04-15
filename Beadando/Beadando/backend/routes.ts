import {Router} from "express";
import {CustomerController} from "./src/controller/customer.controller";
import {FoodController} from "./src/controller/food.controller";
import {OrderController} from "./src/controller/order.controller";
import {OrderedFoodsController} from "./src/controller/orderedFoods.controller";

export function getRouter() {
  const router = Router();

  const customerController = new CustomerController();
  const foodController = new FoodController();
  const orderController = new OrderController();
  const orderedFoodsController=new OrderedFoodsController();

  router.get('/customers', customerController.getAll);
  router.get('/customers/:id', customerController.getOne);
  router.post('/customers', customerController.create);
  router.put('/customers', customerController.update);
  router.delete('/customers/:id', customerController.delete);

  router.get('/foods', foodController.getAll);
  router.get('/foods/:id', foodController.getOne);
  router.post('/foods', foodController.create);
  router.put('/foods', foodController.update);
  router.delete('/foods/:id', foodController.delete);

  router.get('/orders', orderController.getAll);
  router.get('/orders/:id', orderController.getOne);
  router.post('/orders', orderController.create);
  router.put('/orders', orderController.update);
  router.delete('/orders/:id', orderController.delete);

  router.get('/orderedFoods',orderedFoodsController.getAll);
  router.put('/orderedFoods',orderedFoodsController.create);
  router.delete('/orderedFoods/:id',orderedFoodsController.delete);

  return router;
}
