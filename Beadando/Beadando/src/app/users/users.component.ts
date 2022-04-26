import { Component, OnInit } from '@angular/core';
import {User} from "../modells/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users!:User[];
  constructor(private service:UserService) { }

 async ngOnInit() {
    this.users=await this.service.getAllUsers();

  }
async deleteUser(userName:string){
    if (this.service.getThisUsername()===userName){
      alert('Cant delete yourself!')
    }else {
      await this.service.remove(userName);
    }
}
async toAdmin(user:User){
  if (this.service.getThisUsername()===user.userName){
    alert('Cant change yourself!')
  }else {
    await this.service.toAdmin(user);
  }

}
  async removeAdmin(user:User){
    if (this.service.getThisUsername()===user.userName){
      alert('Cant change yourself!')
    }else {
      try {


      await this.service.removeAdmin(user);}catch (err:any){
        alert(err.error.message)
      }
    }
  }
}
