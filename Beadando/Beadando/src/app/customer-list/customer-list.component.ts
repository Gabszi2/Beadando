import {Component, OnInit} from '@angular/core';
import {Customer} from "../modells/customer";
import {RequestsService} from "../services/requests.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];

  constructor(private requestService: RequestsService,private router:Router) {
  }

  async ngOnInit() {
this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.customers = await this.requestService.getAllCustomer();
  }

  async deleteCustomer(id: number) {
    await this.requestService.deleteCustomer(id)
    this.customers = await this.requestService.getAllCustomer();
  }

}
