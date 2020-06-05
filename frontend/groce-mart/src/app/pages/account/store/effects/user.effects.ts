import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, tap, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, of, pipe } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';



@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private router:Router,
    private accountService:AccountService
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserActions.loadUsers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserActions.loadUsersSuccess({ data })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });
  registerUser$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.registerUser),

      exhaustMap(action=>
        this.accountService.registerAccount(action).pipe(
        map(result=>UserActions.registerUserSuccess({payload:result})),
        catchError(err=>of(UserActions.registerUserFailure(err)))
      ))
    )
  })

  loginUser$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      exhaustMap(action=>
        this.accountService.loginAccount(action).pipe(
        map(result=>UserActions.loginUserSuccess({payload:result})),
        catchError(err=>of(UserActions.loginUserFailure(err)))
      )),
      tap(()=>
      this.router.navigateByUrl('/account/profile'))
    )
  })
  forgotPassword$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.forgotPasswordUser),
      exhaustMap(action=>
        this.accountService.forgotPasswordAccount(action).pipe(
          map(result=>UserActions.forgotPasswordResponse({payload:result})),
          catchError(err=> of(UserActions.forgotPasswordFailure(err)))
        ))
    )
  })
  submitOTP$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(UserActions.submitOtp),
      exhaustMap(action=>
        this.accountService.verifyOtp(action).pipe(
          map(result=>UserActions.submitOtpResponse({payload:result})),
          catchError(err=>of(UserActions.submitOtpError(err)))
        ))
    )
  })
  updatePassword$ = createEffect(()=>
    this.actions$.pipe(
      ofType(UserActions.updatePassword),
      exhaustMap(action=>
        this.accountService.updatePassword(action).pipe(
          map(result=>UserActions.updatePasswordResponse({payload:result})),
          catchError(err=>of(UserActions.updatePasswordError(err)))
        ))
    )
  )


}
