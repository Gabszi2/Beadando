import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
loginForm!:FormGroup;
  constructor(private service:UserService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {



    this.loginForm=this.formBuilder.group({
      userName: ['',Validators.required],
      password:['',Validators.required],
    })
  }
async login(){
    const userName=this.loginForm.get('userName')?.value;
  const password=this.loginForm.get('password')?.value;
  try {
   await this.service.login(userName,password);
    await this.router.navigate(['/customers']);
  }catch (err:any){
    alert('Wrong user name or password!')
  }
}

}
