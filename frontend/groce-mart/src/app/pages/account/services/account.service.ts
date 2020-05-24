import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Login, RegisterAccount, RegisterResponse } from '../state/models/account.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userAccountUrl = 'http://localhost:3100/users'
  constructor(private http:HttpClient) { }
  loginAccount(user:Login):Observable<Account>{
    return this.http.post<Account>(this.userAccountUrl+'/login',user);
  }
  registerAccount(user:RegisterAccount):Observable<Account>{
    console.log(user)
    return this.http.post<Account>(this.userAccountUrl+'/register',user);
  }
  getAccountById(usrId:string):Observable<Account>{
    const parms = new HttpParams().set('user-id',usrId)
    return this.http.post<Account>(this.userAccountUrl+'/user',{parms})
  }
  getAccounts():Observable<Account[]>{
    return  this.http.get<Account[]>(this.userAccountUrl+'/accounts')
  }

}
