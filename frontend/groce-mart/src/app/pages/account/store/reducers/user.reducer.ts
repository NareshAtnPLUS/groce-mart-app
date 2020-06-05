import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import * as fromRoot from '../../../../state/app-state'
export const userFeatureKey = 'user';
import { Account } from '../models/account.model'
import { Router } from '@angular/router';
import { state } from '@angular/animations';

export interface AppState extends fromRoot.AppState{
  user:Account,
  logMessage:string,
  loading:boolean,
  loaded:boolean,
  error:string,
  userAvailable:boolean,
  availableUser:string,
  jwtToken:any,
  otpToken:any,
  isOtpMatch:boolean
}

export const initialState: AppState = {
  user:null,
  logMessage:"",
  loading:false,
  loaded:false,
  jwtToken:null,
  otpToken:null,
  availableUser:"",
  error:"",
  userAvailable:false,
  isOtpMatch:false,
};


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => state),
  on(UserActions.loadUsersFailure, (state, action) => state),
  on(UserActions.loadToken,state => {
    return {
      ...state,
      jwtToken:sessionStorage.getItem('user_token'),
    }
  }),
  on(UserActions.registerUser,(state,action)=>{
    return {
      ...state,
      loading:true,
      loaded:false
    }}),
  on(UserActions.registerUserSuccess,(state,action)=>{
    console.log(action.payload)
    return {...state,logMessage:action.payload}}),
  on(UserActions.registerUserFailure,(state,action)=>({...state,error:action.error})),
  on(UserActions.loginUser,(state,action)=>({
    ...state,
    loading:true,
    loaded:false
  })),
  on(UserActions.loginUserSuccess,(state,action)=>{
    console.log(action.payload)
    if(action.payload.success == true) {
      sessionStorage.setItem('user_token',action.payload.jwt)
      return {
        ...state,
        jwtToken:action.payload.jwt,
        loading:false,
        loaded:true
      }
    }
    }),
  on(UserActions.loginUserFailure,(state,action)=>({...state,error:action.error})),
  on(UserActions.forgotPasswordUser,(state,action)=>({...state,loading:true})),
  on(UserActions.forgotPasswordResponse,(state,action)=>{
    sessionStorage.setItem('otp-token',action.payload.otpToken)
    sessionStorage.setItem('available-user',action.payload.availableUser)
    return {
      ...state,
      userAvailable:action.payload.userAvailable,
      otpToken:action.payload.otpToken,
      availableUser:action.payload.availableUser,
      loading:false,
      loaded:true
    }}),
  on(UserActions.forgotPasswordFailure,(state,action)=>({...state,error:action.error})),
  on(UserActions.submitOtp,state=>({
    ...state,
    loading:true,
    loaded:false
  })),
  on(UserActions.submitOtpResponse,(state,action)=>({
    ...state,
    isOtpMatch:action.payload.isMatch,
    loading:true,
    loaded:false
  })),
  on(UserActions.submitOtpError,(state,action)=>({...state,error:action.error})),
  on(UserActions.updatePassword,(state,action)=>({
    ...state,
    loading:true,
    loaded:false
  })),
  on(UserActions.updatePasswordResponse,(state,action)=>({
    ...state,
    loading:false,
    loaded:true
  })),
  on(UserActions.updatePasswordError,(state,action)=>({...state,error:action.error})),
  on(UserActions.logoutUser,state=>{
    sessionStorage.clear()
    return {
      ...state,
      jwtToken:null
    }
  })

);

