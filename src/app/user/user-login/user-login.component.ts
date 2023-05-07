import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private _us:UserService,private _router:Router){}
  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false
  public username!:string
  public password!:string


  onLogin(){
    const loginInfo={
      userid:this.username,
      password:this.password
    }
    console.log(loginInfo)
    this._us.loginUser(loginInfo).subscribe(response=>{
      this.message = response.message
      this.isError = false
      this.isSuccess = true
      localStorage.setItem('token',response.token)
      localStorage.setItem('userID',response.user.customer_id)
      localStorage.setItem('userName',response.user.customer_name)
      localStorage.setItem('type',"customer")
      this._router.navigate(['/home-user/showbikes'])
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
  }
}
