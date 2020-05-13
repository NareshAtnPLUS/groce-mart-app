import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { SecurityComponent } from './security/security.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {path:'',component:AccountComponent},
  {path:'profile',component:ProfileComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'security',component:SecurityComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:AddressComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
