import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsService} from "../services/requests.service";
import {Food} from "../modells/food";

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {
foodForm!:FormGroup;
  constructor(private service:RequestsService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.foodForm=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      size:['',Validators.required],
      description:['',Validators.required],
      cookTime:['',[Validators.required,Validators.min(1)]],
      price:['',[Validators.required,Validators.min(1)]],
    })
  }
  async createFood(){
    const food=this.foodForm.value;
    const addedFood=await this.service.addFood(food);

  }

}
