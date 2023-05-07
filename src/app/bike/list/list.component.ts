import { Component,OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  public bikeData:any[]=[]

  constructor(private _bs:BikeService){}

  ngOnInit(): void {
      this._bs.listAllBikesByLender().subscribe(response=>{
        this.bikeData = response.bikeData
        console.log(this.bikeData)
      },err=>{
        console.log(err)
      })
  }

  onDelete(id:string){

    this._bs.deleteBike(id).subscribe(rs=>{
      console.log(rs)
    },err=>{
      console.log(err)
    })
    this.ngOnInit()  //Showing some type of abnormal behaviour

  }
}
