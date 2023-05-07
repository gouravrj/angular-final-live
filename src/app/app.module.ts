import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './lender/login/login.component';
import { RegisterComponent } from './lender/register/register.component';
import { AddComponent } from './bike/add/add.component';
import { ListComponent } from './bike/list/list.component';
import { EditComponent } from './bike/edit/edit.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserShowBikesComponent } from './user/user-show-bikes/user-show-bikes.component';
import { PaymentPageComponent } from './user/payment-page/payment-page.component';
import { UserHistoryComponent } from './history/user-history/user-history.component';
import { LenderHistoryComponent } from './history/lender-history/lender-history.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    PagenotfoundComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserShowBikesComponent,
    PaymentPageComponent,
    UserHistoryComponent,
    LenderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
