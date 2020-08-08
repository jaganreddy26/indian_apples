import { Injectable } from "@angular/core"; //injectable represents it is a service
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http"; //to do http calls we have import this one
import { ApexService } from "./apex.service"; //it is own service form the loader
import { Observable, throwError } from "rxjs"; // it is a observable
import { map, tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router"; //for navigate the pages


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private apexService: ApexService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `${localStorage.getItem("access_token")}`
    });

    const reqClone = request.clone({
      headers
    })

    return next.handle(reqClone).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.router.navigate(['/error_connection']);
          }
          if (err.status == 403) {
            if (err.error.status == 'failure') {
              this.apexService.showMessage(err.error.error, "X", 'style-error');
            }
          }
        }
      }),
      map((resp: HttpResponse<any>) => {
        if (resp && resp.type == 4 && resp.status == 200) {
          if (resp.body) {
            if (resp.body.status == "success") {
              return resp.clone({
                body: resp.body.data
              });
            } else if (resp.body.status == 'failure') {
              this.apexService.showMessage('Operation Failed', 'X', 'style-error');
              return null;
            } else {
              return resp;
            }
          } else {
            return resp;
          }
        }
      })
    ) as any;
  }
}
