import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './lender/login/login.component';
import { RegisterComponent } from './lender/register/register.component';
import { ListComponent } from './bike/list/list.component';
import { EditComponent } from './bike/edit/edit.component';
import { AddComponent } from './bike/add/add.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from './auth-guard.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserShowBikesComponent } from './user/user-show-bikes/user-show-bikes.component';
import { PaymentPageComponent } from './user/payment-page/payment-page.component';
import { UserHistoryComponent } from './history/user-history/user-history.component';
import { LenderHistoryComponent } from './history/lender-history/lender-history.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"bike/list",component:ListComponent,canActivate:[AuthGuardService]},
  {path:"bike/edit/:id",component:EditComponent,canActivate:[AuthGuardService]},
  {path:"save",component:AddComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"user-register",component:UserRegisterComponent},
  {path:"home-user/showbikes",component:UserShowBikesComponent,canActivate:[AuthGuardService]},
  {path:"bike/book/:price/:bikeid/:lid",component:PaymentPageComponent},
  {path:"user-history",component:UserHistoryComponent},
  {path:"lender-history",component:LenderHistoryComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
