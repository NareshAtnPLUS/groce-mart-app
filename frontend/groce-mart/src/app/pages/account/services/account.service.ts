import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../store/models/account.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from '../store/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userAccountUrl = 'http://localhost:3100/users'
  constructor(private http:HttpClient) { }
  loginAccount(user:any):Observable<any>{
    console.log(user)
    return this.http.post<any>(this.userAccountUrl+'/login',user);
  }
  registerAccount(account:any):Observable<string>{
    console.log(account)
    return this.http.post<string>(this.userAccountUrl+'/register',account);
  }
  getAccountById(usrId:string):Observable<Account>{
    const parms = new HttpParams().set('user-id',usrId)
    return this.http.post<Account>(this.userAccountUrl+'/user',{parms})
  }
  getAccounts():Observable<Account[]>{
    return  this.http.get<Account[]>(this.userAccountUrl+'/accounts')
  }
  getRandom():Observable<any>{
    return this.http.get<any>(this.userAccountUrl+'/random')
  }
  forgotPasswordAccount(usernameAction):Observable<any>{
    const params = new HttpParams().set('user',usernameAction.username)
    return this.http.get<any>(`${this.userAccountUrl}/getAccount`,{params})
  }
  verifyOtp(otp):Observable<any>{
    const params = new HttpParams().set('user',sessionStorage.getItem('available-user'))
    return this.http.post<any>(`${this.userAccountUrl}/verifyOTP`,otp,{params})
  }
  updatePassword(updatePassword):Observable<any>{
    const params = new HttpParams().set('user',sessionStorage.getItem('available-user'))
    return this.http.post<any>(`${this.userAccountUrl}/updatePassword`,updatePassword,{params})
  }
}
