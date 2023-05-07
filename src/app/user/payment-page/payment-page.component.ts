import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/bike.service';
import { History } from 'src/app/history';
import { HistoryService } from 'src/app/history.service';

declare var Razorpay:any;


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  public history = new History('','','','','','','')
  public price!:string
  public cid!:string
  public bikeid!:string
  public lenderid!:string
  public flag:boolean = false
  public todayDate!:Date
  public booked:boolean = false
  public dropdown:boolean = true

  message = "Now yet Started";
  paymentId = "";
  error = " ";
  title = 'razer-pay';
  options = {
    "key": "rzp_test_ZLlDLZjDjC7qvz",
    "amount": "200",
    "name": "TAPZO",
    "description": "TAPZO Bill Desk",
    "image": "https://i.ibb.co/8brFYxf/tapzo-logo.png",
    "order_id":"",
    "handler": function (response:any){
        var event = new CustomEvent("payment.success",
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );
        window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

  public amt!:number

  constructor(private _acroute:ActivatedRoute,private _hs:HistoryService,private _bs:BikeService){}

  ngOnInit(): void {
    this.price = this._acroute.snapshot.paramMap.get('price') as string
    this.bikeid = this._acroute.snapshot.paramMap.get('bikeid') as string
    this.lenderid = this._acroute.snapshot.paramMap.get('lid') as string
    console.log(this.todayDate)
    this.cid = localStorage.getItem('userID') as string

  }
  paynow(amt:string){

    this.paymentId = '';
    this.error = '';

    var strAmount = amt+"00";


    // this.options.key = "";
    // this.options.order_id = "";


    this.options.amount = strAmount; //paise
    this.options.prefill.name = "Gourav Raj";
    this.options.prefill.email = "gourav.raj42001@gmail.com";
    this.options.prefill.contact = "7008983469";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();

    rzp1.on('payment.failed', function (response:any){

        // Todo - store this information in the server
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        // this.error = response.error.reason;
      }
    );

  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any):void{
    this.message = "Success Payment "
  }

  temp!:number
  onPay(days:any){
    this.todayDate = new Date();

    this.history.bid = this.bikeid
    this.history.lid = this.lenderid
    this.history.uid = this.cid
    this.history.day = days
    this.history.cost = this.amt as unknown as string
    this.history.iscomp = "false"
    this.history.date = this.todayDate as unknown as string

    this._hs.registerHistory(this.history).subscribe(
      rs=>console.log(rs),
      err=>console.log(err)
    )
    this.booked = true;
    this.flag = false;
    this.dropdown = false

    this._bs.decrementAvaibilty(this.bikeid)

    this.paynow(this.amt as unknown as string)
  }

  onChange(days:any){
    this.flag = true
    this.temp = this.price as unknown as number
    this.amt = days*this.temp
    console.log(this.amt)
  }


}
