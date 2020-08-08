/*
The auth guard is used to prevent unauthenticated users
from accessing restricted routes.
*/
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sessionUser = localStorage.getItem('access_token');
    if (sessionUser) {
      //authorised so return true
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
