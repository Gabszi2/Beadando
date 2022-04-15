import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RequestsService} from "../services/requests.service";
import {Customer} from "../../../backend/src/entity/Customer";
import {OrderedFoods} from "../../../backend/src/entity/OrderedFoods";

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
