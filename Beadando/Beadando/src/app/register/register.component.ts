import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../modells/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private service:UserService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({

      userName: ['',Validators.required],
      password:['',Validators.required],
      isAdmin:['',Validators.required]
    })
  }
async register(){
    const user=this.registerForm.value;
    try {
      await this.service.register(user);
      await this.router.navigate(['/config'])
    }catch (err:any){
      alert(err.error.message)
    }

}
}
