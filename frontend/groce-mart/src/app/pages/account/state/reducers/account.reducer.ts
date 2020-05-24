import * as accountActions from '../actions/account.action'
import { Account } from '../models/account.model';
import * as fromRoot from '../../../../state/app-state'
import { createFeatureSelector,createSelector } from '@ngrx/store'
import { EntityState,EntityAdapter,createEntityAdapter } from '@ngrx/entity'
export interface AccountState extends EntityState<Account> {
  selectedAccountId:number|null;
  loading:boolean;
  loaded:boolean;
  error:string
}
export interface AppState extends fromRoot.AppState{
  accounts:AccountState
}

export const accountAdapter:EntityAdapter<Account> =createEntityAdapter<Account>();

export const defaultAccount:AccountState = {
  ids:[],
  entities:{},
  selectedAccountId:null,
  loading:false,
  loaded:false,
  error:""
}
export const initialState = accountAdapter.getInitialState(defaultAccount);
export function accountReducer (state= initialState,action:accountActions.Actions):AccountState{
  switch(action.type){
    case accountActions.AccountActionTypes.LOAD_ACCOUNTS:{
      return {
        ...state,
        loading:true
      }
    }
    case accountActions.AccountActionTypes.LOAD_ACCOUNTS_SUCCESS:{
      console.log(action.payload)
      return accountAdapter.addAll(action.payload,{
        ...state,
        loading:false,
        loaded:true
      })
    }
    case accountActions.AccountActionTypes.LOAD_ACCOUNTS_FAIL:{
      return {
        ...state,
        entities:{},
        loading:false,
        loaded:false,
        error:action.payload
      }
    }
    default:{
      return state
    }
  }
}
const getAccountFeatureState = createFeatureSelector<AccountState>(
  "accounts"
)
export const getAccounts = createSelector(
  getAccountFeatureState,
  accountAdapter.getSelectors().selectAll
)
export const getAccountsLoaded = createSelector(
  getAccountFeatureState,
  (state:AccountState) => state.loaded
)
export const getAccountsLoading = createSelector(
  getAccountFeatureState,
  (state:AccountState) => state.loading
)
export const getAccountsError = createSelector(
  getAccountFeatureState,
  (state:AccountState) => state.error
)
