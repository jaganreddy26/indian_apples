import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Login } from '../shared/entities/login';
import { AppService } from './../shared/service/app.service';
import { APIService } from '../service';
import {FormControl, Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any = new Login();
  hide = true;
  userName = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);
  myForm: FormGroup;
  constructor(public appService: AppService, private apiService: APIService) { }

  ngOnInit() {
    console.log(this.loginObj);
    this.myForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
   }

  onSubmit() {
    console.log(this.loginObj)
   
  }
  getErrorMessage(type) {
    if(type == 'userName'){
      if (this.userName.hasError('required')) {
        return 'User Name Required';
      }
    }
    else{
      if (this.userName.hasError('required')) {
        return 'Password Required';
      }
    }
    
  }
 
}
