import { Component,OnInit } from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeService } from 'src/app/bike.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public bike = new Bike('','','','','','','')
  public message!:string
  public isError:boolean = false
  public isSuccess:boolean = false
  public images!:File;



  constructor(private _bikeService:BikeService,private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.bike.lid = localStorage.getItem('userID') as string
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }



  onSubmitForm(){
    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('lid',this.bike.lid)
    formData.append('bname',this.bike.bname)
    formData.append('bdesc',this.bike.bdesc)
    formData.append('pday',this.bike.pday)
    formData.append('avb',this.bike.total)
    formData.append('total',this.bike.total)
    formData.append('bikeimgurl',this.bike.bikeimgurl)

    this._bikeService.registerBike(formData).subscribe(rs=>{
      this.message = rs.message
      this.isError = false;
      this.isSuccess = true;
    },err=>{
      console.log(err)
      this.message = err.error.message
      this.isSuccess = false
      this.isError = true
      console.log(this.bike)
    })
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['bike/list']);
    }, 3000);
  }
}
