import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountInterceptor implements HttpInterceptor {
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const token = 'cnsdjvnsdkcsdajnifwn';
    const reqWithAuth=req.clone({
      setHeaders:{
        Authorization:token
      }
    });
    return next.handle(reqWithAuth).pipe(
      retry(2),
      catchError((error:HttpErrorResponse) => {
        alert(`HTTP Error: ${req.url}`);
        console.log(error)
        return throwError(error)
      }));
  }
}
