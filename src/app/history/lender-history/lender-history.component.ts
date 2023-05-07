import { Component,OnInit } from '@angular/core';
import { HistoryService } from 'src/app/history.service';
import { BikeService } from 'src/app/bike.service';


@Component({
  selector: 'app-lender-history',
  templateUrl: './lender-history.component.html',
  styleUrls: ['./lender-history.component.css']
})
export class LenderHistoryComponent implements OnInit{
  public historyData:any[]=[]
  public bike!:any

  constructor(private _hs:HistoryService,private _bs:BikeService){}

  ngOnInit(): void {
    this._hs.returnHistoryByLender().subscribe(rs=>{
      this.historyData = rs.historyData
      console.log(this.historyData)
    },
      err=>console.log(err)
    )
    
  }

  onClick(id:any,history_id:any){
    this._bs.incrementAvaibilty(id)
    this._hs.completedStatusToTrue(history_id)
    this.ngOnInit()
  }
}
