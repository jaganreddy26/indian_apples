import { Component, OnInit,HostListener } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from './shared/service/app.service';
import { APIService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public router: Router, public appService: AppService, public apiService: APIService) {
   
  }

  ngOnInit() {
    
  
  }
  
}
