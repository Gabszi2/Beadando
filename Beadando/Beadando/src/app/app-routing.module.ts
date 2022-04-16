import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from "./order-list/order-list.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {OrderAddComponent} from "./order-add/order-add.component";
import {OrderedFoodsListComponent} from "./ordered-foods-list/ordered-foods-list.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {FoodAddComponent} from "./food-add/food-add.component";
import {ConfigComponent} from "./config/config.component";


const routes: Routes = [
  {path:'',component:ConfigComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path:'customer-add',component:CustomerAddComponent},
  {path:'order-add',component:OrderAddComponent},
  {path:'ordered-foods/:id',component:OrderedFoodsListComponent},
  {path:'foods',component:FoodListComponent},
  {path:'food-add',component:FoodAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
