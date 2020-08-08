import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Login } from '../shared/entities/login';
import { AppService } from './../shared/service/app.service';
import { APIService } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any = new Login();
 
  constructor(public appService: AppService, private apiService: APIService) { }

  ngOnInit() { }

  onSubmit(loginForm: any) {
   
  }
}
