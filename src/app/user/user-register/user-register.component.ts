import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
    public user = new User('','','','')
    public message!:string
    public isError:boolean = false
    public isSuccess:boolean = false

    public name!:string

    constructor(private _us:UserService,private router: Router, private route: ActivatedRoute){}
  onSubmitForm(name:string){
    this._us.registerUser(this.user).subscribe(response=>{
      // console.log(response)
      this.message = response.message
      this.isSuccess = true;
      this.isError = false
    },err=>{
      // console.log(err)
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
    this.name = name

    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['user-login']);
    }, 3000);

  }
}
