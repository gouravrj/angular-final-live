import { Component } from '@angular/core';
import { Router} from '@angular/router'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public is_show:boolean = true
  public uname!:string

  public isUser:boolean = false;
  public isLender:boolean = false

  constructor(private router:Router){}
  ngOnInit(): void {


    if(localStorage.getItem('type') && localStorage.getItem('type')==="customer")
      this.isUser = true
    else
      this.isUser = false
    if(localStorage.getItem('type') &&localStorage.getItem('type')==="lender")
      this.isLender = true
    else
      this.isLender = false;


    if(localStorage.getItem('token')){
      this.is_show = false
      this.uname = localStorage.getItem('userName') as string
    }
    else{
      this.is_show = true
    }
    if(localStorage.getItem('userID')){
      this.is_show = false
      this.uname = localStorage.getItem('userName') as string
    }
    else{
      this.is_show = true
    }
    // this.onLogout()
  }

  onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userID')
    localStorage.removeItem('type')

    this.router.navigate(['/'])        //Have to include Router and inject it to Constructor////////////////////////////////
  }
}
