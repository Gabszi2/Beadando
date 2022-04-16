import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NavComponent} from './nav/nav.component';
import {OrderListComponent} from './order-list/order-list.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderedFoodsListComponent } from './ordered-foods-list/ordered-foods-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrderListComponent,
    CustomerListComponent,
    CustomerAddComponent,
    OrderAddComponent,
    OrderedFoodsListComponent,
    FoodListComponent,
    FoodAddComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
