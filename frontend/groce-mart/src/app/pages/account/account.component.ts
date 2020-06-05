import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store, select } from '@ngrx/store';
import * as accountActions from './store/actions/user.actions'
import * as AccountSelectors from './store/selectors/user.selectors'
import { AuthService } from './services/auth.service';
import { tap } from 'rxjs/operators';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],

})
export class AccountComponent implements OnInit {
  forgotPassword:boolean=false;
  constructor(
    private fb:FormBuilder,
    private store$:Store<any>,
    private auth:AuthService
  ) { }
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
        }
      }
  }
  ngOnInit(): void {
    this.auth.isLoggedIn()
  }
  tabBackground={
    value:'primary'
  }
  animationState: string;

  startAnimation(state) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.minLength(6)]
  })
  forgotForm=this.fb.group({
    username:['',Validators.minLength(10)],
  })
  otpForm = this.fb.group({
    otp:['',Validators.required]
  })
  updatePasswordForm=this.fb.group({
    password:['',Validators.minLength(6)],
    confirmPassword: ['']
  },{validator: this.checkPasswords })
  registerForm=this.fb.group({
    fullName:this.fb.group({
      firstName:['',Validators.minLength(3)],
      lastName:['',Validators.minLength(3)],
    }),
    username:['',Validators.minLength(5)],
    email:['',[Validators.required,Validators.email]],
    mobileNumber:['',[Validators.required,Validators.minLength(10)]],
    password:['',Validators.minLength(6)],
    confirmPassword: ['']
  }, {validator: this.checkPasswords })
  matcher = new MyErrorStateMatcher();
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true }
  }

  async onRegisterSubmit(){
    console.log(this.registerForm.value)
    const user = this.registerForm.value
    delete user.confirmPassword
    this.store$.dispatch(accountActions.registerUser(user))

  }
  onLoginSubmit(){
    console.log(this.loginForm.value)
    this.store$.dispatch(accountActions.loginUser(this.loginForm.value))
  }
  showOtpForm=false;
  async onForgotSubmit(){
    const  username = this.forgotForm.value
    this.store$.dispatch(accountActions.forgotPasswordUser(username))
    this.store$.pipe(
      select(AccountSelectors.selectUserAvailable)
    ).subscribe(userAvailable => this.showOtpForm = userAvailable)
  } showUpdatePasswordForm
  onOtpSubmit(){
    this.store$.pipe(
      select(AccountSelectors.selectIsOtpMatch)
    ).subscribe(isOtpMatch=>this.showUpdatePasswordForm = isOtpMatch)
    this.store$.dispatch(accountActions.submitOtp(this.otpForm.value))

  }
  onUpdatePasswordSubmit(){
    this.store$.dispatch(accountActions.updatePassword(this.updatePasswordForm.value))
  }


}
