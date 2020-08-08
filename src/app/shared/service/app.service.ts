import { Injectable } from "@angular/core"; //injectable represents the service
import { Router, NavigationExtras,ActivatedRoute } from "@angular/router"; //for navigate the pages
import { Storage } from "../utils/storage"; //to store the data
import { ApexService } from "./apex.service"; //own service for loader

@Injectable()
export class AppService {
  sessionUser: any;
  constructor(
    private router: Router,
    private apexService: ApexService,
    private activatedRoute: ActivatedRoute
  ) { }
  navigate(url: String, params?: any) {
    if (params) {
      let param: any = {};
      if (params instanceof Array) {
        for (let i = 0; i < params.length; i++) {
          for (let key in params[i]) {
            param[key] = params[i][key];
          }
        }
      } else {
        param = params;
      }

      let navigationExtras: NavigationExtras = {
        queryParams: param
      };
      this.router.navigate([url], navigationExtras);
    } else {
      this.router.navigate([url]);
    }
  }
  getParams(param){
    console.log(param)
   return this.activatedRoute.snapshot.queryParamMap.get(param);
  }
  showMessage(message: string, action: any, cssConfig: string) {
    this.apexService.showMessage(message, action, cssConfig);
  }

  checkConfigChange(formObj: any, initObj: any) {
    for (let prop in formObj) {
      if (initObj.hasOwnProperty(prop)) {
        initObj[prop] = formObj[prop]
      }
    }
    return initObj;
  }

  sessionClear() {
    Storage.clearSession();
  }
}
