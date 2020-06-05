import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/selectors/user.selectors'
import * as fromUserState from '../store/reducers/user.reducer'
@Injectable({
  providedIn: 'root'
})
export class AccountInterceptor implements HttpInterceptor {
  constructor(
    private store$:Store<fromUserState.AppState>
  ){}


  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const token = sessionStorage.getItem('user_token')
    const otpToken = sessionStorage.getItem('otp-token')
    let reqWithAuth
    if((token!== undefined || token !== null) && (otpToken === null)){
      reqWithAuth=req.clone({
        setHeaders:{
          Authorization:`Bearer ${sessionStorage.getItem('user_token')}`
        }
      });
    } else if(otpToken!==null){
      reqWithAuth=req.clone({
        setHeaders:{
          Authorization:`Bearer ${otpToken}`
        }
      });
    } else {
      reqWithAuth=req.clone({
        setHeaders:{
          Authorization:`None`
        }
      });
    }

    return next.handle(reqWithAuth).pipe(
      retry(2),
      catchError((error:HttpErrorResponse) => {
        alert(`HTTP Error: ${req.url}`);
        console.log(error)
        return throwError(error)
      }));
  }
}
