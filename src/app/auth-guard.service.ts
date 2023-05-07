import { Injectable } from '@angular/core';
import { LenderService } from './lender.service';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private lender:LenderService, private router:Router) { }

  canActivate(){
    // console.log(this.lender.isLoggedIn())
    if(!this.lender.isLoggedIn()){
      this.router.navigate(['/'])
      return false
    }
    return true
  }
}
