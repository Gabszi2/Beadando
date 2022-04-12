import { Component, OnInit } from '@angular/core';
import {Customer} from "../modells/customer";
import {RequestsService} from "../services/requests.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers!:Customer[];
  constructor(private requestService:RequestsService) { }

  async ngOnInit(){
    this.customers=await this.requestService.getAllCustomer();
  }

  async deleteCustomer(id:number) {
    await this.requestService.deleteCustomer(id)
    this.customers=await this.requestService.getAllCustomer();
  }
}
