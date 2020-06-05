import { createAction, props } from '@ngrx/store';
import { Login, LoginResponse } from '../models/login.model';
import { Account } from '../models/account.model'
export const loadUsers = createAction(
  '[Account] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Account] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[Account] Load Users Failure',
  props<{ error: any }>()
);

export const registerUser = createAction(
  '[Account] Register User',
  props<{payload:{account:Account}}>()
)
export const registerUserSuccess = createAction(
  '[Account] Register User Success',
  props<{payload:string}>()
)
export const registerUserFailure = createAction(
  '[Account] Register User Failure',
  props<{error:any}>()
)
export const loginUser = createAction(
  '[Account] Login User',
  props<{payload:{account:Login}}>()
)
export const loginUserSuccess = createAction(
  '[Account] Login User Success',
  props<{payload:{jwt:string;success:boolean}}>()
)
export const loginUserFailure = createAction(
  '[Account] Login User Failure',
  props<{error:any}>()
)
export const loadToken = createAction(
  '[Account] Load Token from Session Storage'
);
export const logoutUser = createAction(
  '[Account] Logout User'
)
export const forgotPasswordUser = createAction(
  '[Account] Forgot Password',
  props<{payload:{username:string}}>()
)
export const forgotPasswordResponse = createAction(
  '[Account] Forgot Passsword Response',
  props<{payload:{userAvailable:boolean,otpToken:string,availableUser:string}}>()
)
export const forgotPasswordFailure = createAction(
  '[Account] Forgot Password Error',
  props<{error:any}>()
)
export const submitOtp = createAction(
  '[Account] Submit OTP',
  props<{payload:{otp:string}}>()
)
export const submitOtpResponse = createAction(
  '[Account] Submit OTP Response',
  props<{payload:{isMatch:boolean}}>()
)
export const submitOtpError = createAction(
  '[Account] Submit OTP Error',
  props<{error:any}>()
)
export const updatePassword = createAction(
  '[Account] Update Password',
  props<{payload:{password:string}}>()
)
export const updatePasswordResponse = createAction(
  '[Account] Update Password Response',
  props<{payload:{updateStatus:boolean}}>()
)
export const updatePasswordError = createAction(
  '[Account] Update Password Error',
  props<{error:any}>()
)
