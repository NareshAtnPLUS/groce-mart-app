import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/selectors/user.selectors'
import * as UserActions from '../store/actions/user.actions'
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private store$:Store<any>
  ) { }
  isUserLoggedIn(){
    return sessionStorage.getItem('user_token')
  }
  async isLoggedIn(){
    if(sessionStorage.getItem('user_token') === null){
      console.log('there is no token')
      return false
    }
    const jwtFromStore = await this.store$.select(fromUser.selectJWTToken)
    let token=null;
    await jwtFromStore.pipe(
      take(1)).subscribe(
        s=>token=s
      )
    console.log(token)
    console.log(sessionStorage.getItem('user_token'))
    if(sessionStorage.getItem('user_token') && token===null){
      this.store$.dispatch(UserActions.loadToken())
      console.log('user token is null')
    }
    const jwtFromStoreAfter = await this.store$.select(fromUser.selectJWTToken)
    await jwtFromStoreAfter.pipe(
      take(1)).subscribe(
        s=>token=s
    )
    console.log(token)
    if(token){
      return true
    } else {
      return false
    }

  }
}
