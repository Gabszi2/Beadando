import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {KitchenQueue} from "../modells/kitchenQueue";
import {Config} from "../modells/config";

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.css']
})
export class KitchenListComponent implements OnInit {
  queue!:KitchenQueue[];
  config!:Config[];
  kitchenSize!:number;

  constructor(private requestService: RequestsService) { }

  async ngOnInit(){
    this.queue=await this.requestService.getQueue();
    this.config=await this.requestService.getConfig();
    this.kitchenSize=this.config[0].cookingStations;
  }
async deleteFromQueue(id:number){
    await this.requestService.deleteFromQueue(id);
    this.queue=await this.requestService.getQueue();
}

}
