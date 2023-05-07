import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private _url = "https://tapzo-nodejs-server-production.up.railway.app/bike"
  constructor(private _http: HttpClient) { }



  listAllBikes(){
    return this._http.get<{message:string,bikes:any}>(this._url+'/get')
  }

  listAllBikesByLender(){
    return this._http.get<{message:string,bikeData:any}>(this._url+'/'+localStorage.getItem('userID'),{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token') || '{}')
    })
  }

  updateBike(id:string,bike:any){
    return this._http.put<{message:string}>(this._url+`/updatebyID/${id}`,bike,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token') || '{}')
    })
  }

  getBikeByID(id:string){
    console.log(this+'/getbyID/'+id)
    return this._http.get<{message:string,bikes:any}>(this._url+'/getbyID/'+id,{    //returning an observable
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token') || "{}")
    })
  }

  registerBike(bike:any){
    return this._http.post<{message:string,bikeData:any}>(this._url+'/post',bike,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token') || "{}")
    });
  }

  deleteBike(id:string){
    return this._http.delete<{message:string}>(this._url+'/deletebyID/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token') || "{}")
    });
  }

  decrementAvaibilty(id:string){
    const body="Built By Gourav"
    this._http.put<{message:string}>(this._url+`/avb/${id}`,body).subscribe(
      rs=>console.log(rs),
      err=>console.log(err)
    )
  }

  incrementAvaibilty(id:string){
    const body="Built By Gourav"
    this._http.put<{message:string}>(this._url+`/avbplus/${id}`,body).subscribe(
      rs=>console.log(rs),
      err=>console.log(err)
    )
  }

}
