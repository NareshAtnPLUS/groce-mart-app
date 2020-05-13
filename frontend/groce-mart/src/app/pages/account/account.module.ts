import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { PaymentsComponent } from './payments/payments.component';
import { SecurityComponent } from './security/security.component';
import {AccountRoutingModule} from './account-routing.module';
import { CustomDirectivesDirective } from './custom-directives.directive';

@NgModule({
  declarations: [ProfileComponent, OrdersComponent, AddressComponent, PaymentsComponent, SecurityComponent, CustomDirectivesDirective],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports:[
  ]
})
export class AccountModule { }
