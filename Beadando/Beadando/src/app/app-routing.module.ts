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
import {KitchenListComponent} from "./kitchen-list/kitchen-list.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegisterComponent} from "./register/register.component";
import {AdminGuard} from "./admin.guard";
import {UserGuard} from "./user.guard";
import {UsersComponent} from "./users/users.component";


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent,canActivate:[AdminGuard]},
  {path:'config',component:ConfigComponent,canActivate:[AdminGuard]},
  {path:'users',component:UsersComponent,canActivate:[AdminGuard]},
  {path: 'orders', component: OrderListComponent,canActivate:[UserGuard]},
  {path: 'customers', component: CustomerListComponent,canActivate:[UserGuard]},
  {path:'customer-add',component:CustomerAddComponent,canActivate:[UserGuard]},
  {path:'order-add/:id',component:OrderAddComponent,canActivate:[UserGuard]},
  {path:'ordered-foods/:id',component:OrderedFoodsListComponent,canActivate:[UserGuard]},
  {path:'foods',component:FoodListComponent,canActivate:[UserGuard]},
  {path:'food-add',component:FoodAddComponent,canActivate:[UserGuard]},
  {path:'kitchen-list',component:KitchenListComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
