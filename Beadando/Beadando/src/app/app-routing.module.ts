import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from "./order-list/order-list.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerAddComponent} from "./customer-add/customer-add.component";


const routes: Routes = [
  {path: 'orders', component: OrderListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path:'customer-add',component:CustomerAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
