import { Component,OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';
import { HistoryService } from 'src/app/history.service';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit{

  public historyData:any[]=[]
  public bike!:any

  constructor(private _hs:HistoryService,private _bs:BikeService){}

  ngOnInit(): void {
    this._hs.returnHistoryByUser().subscribe(rs=>{
      this.historyData = rs.historyData
      console.log(this.historyData)
    },
      err=>console.log(err)
    )
  }
}

