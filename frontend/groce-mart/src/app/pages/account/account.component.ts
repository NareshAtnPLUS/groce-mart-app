import { Component, OnInit } from '@angular/core';
import { trigger,animate,keyframes,transition} from '@angular/animations'
import * as kf from './keyframes'
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
    private fb:FormBuilder
  ) { }
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
        }
      }
  }
  ngOnInit(): void {
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
    username:['',Validators.required],
  })
  registerForm=this.fb.group({
    firstName:['',Validators.minLength(3)],
    lastName:['',Validators.minLength(3)],
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
  onRegisterSubmit(){
    console.log(this.registerForm.value)
  }
  onLoginSubmit(){
    console.log(this.loginForm.value)
  }
  onForgotSubmit(){

  }

}
