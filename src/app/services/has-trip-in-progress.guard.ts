import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HasTripInProgressGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService?.User?.tripId) {
      return true;
    }

    return this.router.navigate(['create-trip']);
  }

}
