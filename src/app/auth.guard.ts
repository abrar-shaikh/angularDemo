import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate() {
    if (localStorage.getItem('id'))
      return true;
    else {
      this.route.navigate([''])
      return false
    }
  }
}
