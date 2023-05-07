import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LenderService } from 'src/app/lender.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false
  public username!:string
  public password!:string

  constructor(private _lenderservice:LenderService,private _router:Router){}

  onLogin(){
    const loginInfo={
      username:this.username,
      password:this.password
    }
    this._lenderservice.loginLender(loginInfo).subscribe(response=>{
      this.message = response.message
      this.isError = false
      this.isSuccess = true
      localStorage.setItem('token',response.token)
      localStorage.setItem('userID',response.user.id)
      localStorage.setItem('userName',response.user.name)
      localStorage.setItem('type',"lender")

      this._router.navigate(['/bike/list'])
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
  }
}
