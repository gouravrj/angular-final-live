import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(private _bikeservice:BikeService){}

  public bikeData:any[]=[]
  ngOnInit(): void {

    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userID')

    this._bikeservice.listAllBikes().subscribe(rs=>{
      console.log(rs)
      this.bikeData = rs.bikes
    },err=>{
      console.log(err)
    })
  }


}
