import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../modells/customer";
import {Food} from "../modells/food";
import {Order} from "../modells/order";
import {lastValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  url:string='http://localhost:3000/api';
  constructor(private http:HttpClient) { }
  //customers

  async getAllCustomer(){
    return lastValueFrom(this.http.get<Customer[]>(this.url+'/customers'));
  }

  async addCustomer(customer:Customer){
    return lastValueFrom(this.http.post<Customer>(this.url+'/customers',customer))
  }
  async deleteCustomer(id:number){
    return lastValueFrom(this.http.delete(this.url+'/customers/'+id))
  }
  //foods
  async getAllFood(){
    return lastValueFrom(this.http.get<Food[]>(this.url+'/foods'));
  }
  async getFood(id:number){
    return lastValueFrom(this.http.get<Food>(this.url+'/foods/'+id));
  }
  async addFood(food:Food){
    return lastValueFrom(this.http.post<Food>(this.url+'/foods',food));
  }
  async deleteFood(id:number){
    return lastValueFrom(this.http.delete(this.url+'/foods/'+id))
  }
  //orders
  async getAllOrders(){
    return lastValueFrom(this.http.get<Order[]>(this.url+'/orders'));
  }
  async updateOrder(order:Order){
    return lastValueFrom(this.http.put<Order>(this.url+'/orders/',order));
  }
  async addOrder(order:Order){
    return lastValueFrom(this.http.post<Order>(this.url+'/orders',order));
  }
  async deleteOrder(id:number){

    return lastValueFrom(this.http.delete(this.url+'/orders/'+id))
  }
  async deleteDelivered(){
    return lastValueFrom(this.http.get(this.url+'/orders/delivered'))
  }
}
