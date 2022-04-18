import { Component, OnInit } from '@angular/core';

import {RequestsService} from "../services/requests.service";
import {Food} from "../modells/food";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../modells/customer";
import {Order} from "../modells/order";
import {OrderedFoods} from "../modells/orderedFoods";
import {KitchenQueue} from "../modells/kitchenQueue";
import {Config} from "../modells/config";

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  foodAll!: Food[];
  customer!: Customer;
  id!: number;
  foodsAdded: Food[] = [];
  queue!: KitchenQueue[];
  config!:Config[];

  order=<Order>{};
  asd!:number;
  constructor(private service: RequestsService, private route: ActivatedRoute,private router:Router) {
  }

  async ngOnInit() {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.foodAll = await this.service.getAllFood();
    this.customer = await this.service.getCustomer(this.id);
    this.queue = await this.service.getQueue();
    this.config=await this.service.getConfig();
  }

  addFoodToOrder(food: Food) {
    this.foodsAdded.push(food);
  }

  async orderDone() {
    this.order.customer=this.customer;
    this.order.delivered=false;
    this.order.deliveryTime=0;
    this.order.endPrice=0;
    this.order.orderedFoods=[];
    this.order.kitchenQueue=[];

    for (let i =0;i<this.foodsAdded.length;i++){
      let orderedFoods=<OrderedFoods>{};
      orderedFoods.food=this.foodsAdded[i];
      let queueAdd=<KitchenQueue>{};
      queueAdd.food=this.foodsAdded[i];
      this.order.orderedFoods.push(orderedFoods);
      this.order.kitchenQueue.push(queueAdd);
      this.order.endPrice=this.order.endPrice+this.foodsAdded[i].price;
    }
    if (this.order.endPrice>=this.config[0].discountFrom){
      this.order.endPrice=this.order.endPrice*0.9;
    }


    let kitchenSize=this.config[0].cookingStations;
    let queueBuildup=Math.floor(this.queue.length/kitchenSize);


    if (queueBuildup>0) {
      let queueAvg: number = 0;
      for (let i = 0; i < this.queue.length; i++) {
        queueAvg = queueAvg + this.queue[i].food.cookTime;
      }
      queueAvg = ((queueAvg / this.queue.length) * queueBuildup) + (queueAvg * Math.floor(kitchenSize/2));
      this.order.deliveryTime = this.order.deliveryTime + queueAvg;
    }


    if (this.foodsAdded.length>kitchenSize){
      let addedBuildup:number=Math.floor(this.foodsAdded.length/kitchenSize);
      let addedAvg:number=0;

      for (let i=0;i<this.foodsAdded.length;i++){
        addedAvg=addedAvg+this.foodsAdded[i].cookTime;
      }
      addedAvg=((addedAvg/this.foodsAdded.length))*(addedBuildup+addedAvg*Math.floor(kitchenSize/2));
      this.order.deliveryTime=this.order.deliveryTime+addedAvg;
    }
    else {
      let addedAvg:number=0;
      for (let i=0;i<this.foodsAdded.length;i++){
        addedAvg=addedAvg+this.foodsAdded[i].cookTime;
      }
      addedAvg=addedAvg/this.foodsAdded.length;
      this.order.deliveryTime=this.order.deliveryTime+addedAvg;
    }
this.order.deliveryTime=Math.floor(this.order.deliveryTime);
    await this.service.addOrder(this.order);

   this.router.navigate(['/orders']).then(()=>{window.location.reload()})
  }


}


