import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestsService} from "../services/requests.service";
import {OrderedFoods} from "../modells/orderedFoods";

@Component({
  selector: 'app-ordered-foods-list',
  templateUrl: './ordered-foods-list.component.html',
  styleUrls: ['./ordered-foods-list.component.css']
})
export class OrderedFoodsListComponent implements OnInit {

  allOrderedFoods!:OrderedFoods[];
  orderedFoods:OrderedFoods[]=[];
  id!:number;
  constructor(private route:ActivatedRoute,private service:RequestsService) { }

  ngOnInit(){
  this.setup();
  }
  async setup(){
    this.id =parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.allOrderedFoods=await this.service.getAllOrderedFoods();
    this.ordersFoods();
  }
ordersFoods(){

    for (let i=0;i<this.allOrderedFoods.length;i++){
      if (this.allOrderedFoods[i].order.id===this.id){
        this.orderedFoods.push(this.allOrderedFoods[i])
      }
    }
}
}
