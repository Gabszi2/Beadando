import {Component, OnInit} from '@angular/core';
import {Order} from "../modells/order";
import {RequestsService} from "../services/requests.service";
import {Router} from "@angular/router";
import {OrderedFoods} from "../modells/orderedFoods";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders!: Order[];

  constructor(private requestService: RequestsService) {
  }

 ngOnInit() {
this.setup();
  }

async setup(){
  this.orders = await this.requestService.getAllOrders();
}

  async deleteOrder(id: number) {

    await this.requestService.deleteOrder(id);
    this.orders = await this.requestService.getAllOrders();

  }

  async delivered(order: Order) {
    order.delivered = true;
    await this.requestService.updateOrder(order);
    this.orders = await this.requestService.getAllOrders();
  }


}
