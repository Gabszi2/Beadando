import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
customerForm!:FormGroup;
  constructor(private service:RequestsService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.customerForm=this.formBuilder.group({
      id:[],
      firstName: ['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      tel:['',[Validators.required,Validators.pattern('[- +()0-9]+')]],
    })
  }
  async createCustomer(){
    const customer=this.customerForm.value;
      const addedCustomer=await this.service.addCustomer(customer);
}
}
