import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LenderService {

  constructor(private _http:HttpClient) { }

  public url:string = "https://tapzo-nodejs-server-production.up.railway.app/lender"
  registerLender(lender:any){
    return this._http.post<{message:string,lender:any}>(this.url+'/register',lender)
  }

  loginLender(loginInfo:any){
    return this._http.post<{message:string,user:any,token:any}>(this.url+'/login',loginInfo)
  }

  isLoggedIn(){
    if(localStorage.getItem('token')===null){
      return false
    }else{
      // return !this.jwt.isTokenExpired(localStorage.getItem('token'))

      return !!localStorage.getItem('token')

    }
  }

}
