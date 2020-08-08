import { Injectable } from "@angular/core"; //injectable represents the service
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//observable from rxjs
import { AppService } from './shared/service/app.service';
@Injectable()
export class APIService {
  private url: string = environment.API_END_POINT;
  constructor(private http: HttpClient, private appService: AppService) { }

  getData(classId:string):Observable<any[]> {
    return this.http.get<any[]>(this.url+`${classId}`);
  }

  saveData(classId: string, data: any):Observable<any[]> {
    return this.http.post<any[]>(this.url+`${classId}`, data);
  }

  updateData(classId: string, data: any):Observable<any[]> {
    return this.http.put<any[]>(this.url+`${classId}`, data);
  }

  /* Need to alter after working  */
  loginAuth(data:any):Observable<any[]> {
    const authLogin = 'auth/login';
    return this.http.post<any[]>(this.url+`${authLogin}`, data);
  }

  /* Neet to alter after working */
  logoutAuth():Observable<any[]> {
    const authLogout = 'auth/logout';
    return this.http.post<any[]>(this.url+`${authLogout}`, {});
  }


  finalCommit = ():void => {
    this.http.post<any[]>(this.url+`commit`, {}).subscribe((res: any) => {
      this.appService.showMessage('Operation Succeeded', 'X', 'style-succes')
    });
  }
}
