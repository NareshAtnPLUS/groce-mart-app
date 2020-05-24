import { Injectable } from '@angular/core';
import { Actions,Effect,ofType, createEffect } from '@ngrx/effects'
import { Action } from '@ngrx/store';
import { Observable, of} from 'rxjs';
import { map,mergeMap, catchError, tap } from 'rxjs/operators'

import * as accountActions from "../actions/account.action";
import { Account } from "../models/account.model";
import { AccountService } from '../../services/account.service';

@Injectable()
export class AccountEffect {
  constructor(
    private actions$:Actions,
    private accountService:AccountService
  ) { }

  loadAccounts$ =   createEffect(()=> this.actions$.pipe(
    ofType<accountActions.LoadAccounts>(
      accountActions.AccountActionTypes.LOAD_ACCOUNTS
    ),
    mergeMap((actions:accountActions.LoadAccounts)=>
      this.accountService.getAccounts().pipe(
        map((accounts:Account[])=>
          new accountActions.LoadAccountsSuccess(accounts)
        ),
        catchError(err => of(new accountActions.LoadAccountsFail(err)))
      )
    )
  ))
}
