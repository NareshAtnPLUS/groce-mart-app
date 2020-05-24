import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { PaymentsComponent } from './payments/payments.component';
import { SecurityComponent } from './security/security.component';
import {AccountRoutingModule} from './account-routing.module';
import { CustomDirectivesDirective } from './custom-directives.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccountInterceptor } from './interceptors/account.interceptor';
import { AccountEffect } from './state/effects/account.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './state/reducers/account.reducer';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [ProfileComponent, OrdersComponent, AddressComponent, PaymentsComponent, SecurityComponent, CustomDirectivesDirective],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([AccountEffect]),
    StoreModule.forFeature('accounts',accountReducer),
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AccountInterceptor,
      multi:true
    }
  ],
  exports:[
  ]
})
export class AccountModule { }
