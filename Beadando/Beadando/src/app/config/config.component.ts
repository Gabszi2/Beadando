import { Component, OnInit } from '@angular/core';
import {Config} from "../modells/config";
import {RequestsService} from "../services/requests.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
configAll!:Config[];
config!:Config;
configForm!:FormGroup;
  constructor(private service:RequestsService,private formBuilder:FormBuilder) { }

  ngOnInit():void{
    this.setup();
    this.configForm=this.formBuilder.group({
      id:[1],
      discountFrom:[0,[Validators.required,Validators.min(0)]],
      cookingStations:[0,[Validators.required,Validators.min(1)]]
    })

  }
  async setup(){
    this.configAll=await this.service.getConfig();
    this.config=this.configAll[0];
  }
async setConfig(){
    this.config=this.configForm.value;
await this.service.updateConfig(this.config);
}
}
