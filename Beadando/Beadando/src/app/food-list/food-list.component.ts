import { Component, OnInit } from '@angular/core';
import {Food} from "../modells/food";
import {RequestsService} from "../services/requests.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foods!:Food[];
  constructor(private requestService: RequestsService,private router:Router) { }

  async ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.foods=await this.requestService.getAllFood();
  }
  async deleteFood(id:number){
    await this.requestService.deleteFood(id);
    this.foods=await this.requestService.getAllFood();
  }

}
