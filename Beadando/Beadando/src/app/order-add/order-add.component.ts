import { Component, OnInit } from '@angular/core';

import {RequestsService} from "../services/requests.service";
import {Food} from "../modells/food";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../modells/customer";
import {Order} from "../modells/order";
import {OrderedFoods} from "../modells/orderedFoods";
import {KitchenQueue} from "../modells/kitchenQueue";

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
foodAll!:Food[];
customer!:Customer;
  id!:number;
  foodsAdded:Food[]=[];
  queue!:KitchenQueue[];
  constructor(private service:RequestsService,private route:ActivatedRoute) { }

 async ngOnInit(){
   this.id =parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.foodAll=await this.service.getAllFood();
this.customer=await this.service.getCustomer(this.id);
this.queue=await this.service.getQueue();
  }

addFoodToOrder(food:Food){
 this.foodsAdded.push(food);
}
async orderDone(){
  let order=<Order>{};
  let orderedFoods:OrderedFoods;
  let queueAdd:KitchenQueue;

  order.customer=this.customer;
  order.delivered=false;
  order.deliveryTime=0;

  await this.service.addOrder(order);

  let orders=await this.service.getAllOrders();
  let updateOrder=orders[orders.length-1];

  for (let i=0;i<this.foodsAdded.length;i++){
    let addOrdered=<OrderedFoods>{};
    let addQueue=<KitchenQueue>{};

    addOrdered.order=updateOrder;
    addOrdered.food=this.foodsAdded[i];

    await this.service.addOrderedFoods(addOrdered)

    addQueue.order=updateOrder;
    addQueue.food=this.foodsAdded[i];

    await this.service.addToQueue(addQueue);

  }


}
}
