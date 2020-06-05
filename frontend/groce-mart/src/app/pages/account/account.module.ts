import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { PaymentsComponent } from './payments/payments.component';
import { SecurityComponent } from './security/security.component';
import {AccountRoutingModule} from './account-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccountInterceptor } from './interceptors/account.interceptor';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/theme/material.module';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [ProfileComponent, OrdersComponent, AddressComponent, PaymentsComponent, SecurityComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers:[
    AuthService,
  ],
  exports:[
  ]
})
export class AccountModule { }
