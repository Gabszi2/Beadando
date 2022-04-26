import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../modells/user";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url : string = 'http://localhost:3000/api/user';
  private currentUser?: User;
  constructor(private http: HttpClient, private router: Router) { }
  getThisUsername(){
    return this.currentUser?.userName;
  }
  getAllUsers(){
    return lastValueFrom(this.http.get<User[]>(this.url))
  };
  isLoggedIn(){
    if (this.currentUser===undefined){
      return false;
    }
    return true;
}
  async login(userName:string,password:string){
    const user=await lastValueFrom(this.http.get<User>(this.url+'/'+userName+'/'+password));

    this.currentUser=user;
  }
  async register(user:User){
  return lastValueFrom(this.http.post(this.url,user))
  }
async remove(userName:string){
  if (userName==='admin'){
    alert('Canot be deleted!');
    return
  }else {
    return lastValueFrom(this.http.delete(this.url + '/' + userName))
  }
}
async toAdmin(user:User){
    user.isAdmin=true;
    return lastValueFrom(this.http.put(this.url,user))
}
  async removeAdmin(user:User){
    if (user.userName==='admin'){
      alert('Canot be removed!');
      return
    }else {
    user.isAdmin=false;
    return lastValueFrom(this.http.put(this.url,user))}
  }
  isAdmin(){
    return this.currentUser?.isAdmin;
  }
  logout(){
    this.currentUser=undefined;
    this.router.navigate(['/logout']);
  }
}
