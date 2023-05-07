import { Component,OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';
import { HistoryService } from 'src/app/history.service';

@Component({
  selector: 'app-user-show-bikes',
  templateUrl: './user-show-bikes.component.html',
  styleUrls: ['./user-show-bikes.component.css']
})
export class UserShowBikesComponent implements OnInit{
  public bikeData:any[]=[]
  public historyData:any[]=[]
  public isabletobook:boolean = true

  constructor(private _bs:BikeService, private _hs:HistoryService){}


  ngOnInit(): void {
    this._bs.listAllBikes().subscribe(response=>{
      this.bikeData = response.bikes
    },err=>{
      console.log(err)
    })

    this._hs.returnHistoryByUser().subscribe(rs=>{
      this.historyData = rs.historyData
    },
      err=>console.log(err)
    )
    // console.log(this.historyData[0])
    // if(this.historyData[this.historyData.length-1].iscompleted==="false")
    //   this.isabletobook = false
  }
}
