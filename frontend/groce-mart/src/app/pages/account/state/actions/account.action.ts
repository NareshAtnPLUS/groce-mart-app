import { Action } from '@ngrx/store'
import {
  Account,Address,RegisterAccount,RegisterResponse,
  Login, UpdatePassword,Order } from '../models/account.model';
import { Update } from '@ngrx/entity';


export enum AccountActionTypes{
  // LOGIN_ACCOUNT = "[ACCOUNT LOGIN] Load Account",
  // LOGIN_ACCOUNT_SUCCESS = "[ACCOUNT LOGIN] Load Account Success",
  // LOGIN_ACCOUNT_FAIL = "[ACCOUNT LOGIN] Load Account Fail",
  LOAD_ACCOUNTS = "[ACCOUNT LOAD] Load Account",
  LOAD_ACCOUNTS_SUCCESS = "[ACCOUNT LOAD] Load Account Success",
  LOAD_ACCOUNTS_FAIL = "[ACCOUNT LOAD] Load Account Fail",
  CREATE_ACCOUNT = "[ACCOUNT REGISTER] Create Account",
  CREATE_ACCOUNT_SUCCESS = "[ACCOUNT REGISTER] Create Account Success",
  CREATE_ACCOUNT_FAIL = "[ACCOUNT REGISTER] Create Account Fail",
  UPDATE_ACCOUNT = "[ACCOUNT PROFILE] Update Account",
  UPDATE_ACCOUNT_SUCCESS ="[ACCOUNT PROFILE] Update Account Success",
  UPDATE_ACCOUNT_FAIL = "[ACCOUNT PROFILE] Update Account Fail",
  UPDATE_ACCOUNT_PASSWORD = "[ACCOUNT SECURITY] Update Account Password",
  UPDATE_ACCOUNT_PASSWORD_SUCCESS ="[ACCOUNT SECURITY] Update Account Password Success",
  UPDATE_ACCOUNT_PASSWORD_FAIL = "[ACCOUNT SECURITY] Update Account Password Fail",
  CREATE_ADDRESS = "[ACCOUNT ADDRESS] Create Address",
  CREATE_ADDRESS_SUCCESS = "[ACCOUNT ADDRESS] Create Address Success",
  CREATE_ADDRESS_FAIL = "[ACCOUNT ADDRESS] Create Address Fail",
  UPDATE_ADDRESS = "[ACCOUNT ADDRESS] Update Address",
  UPDATE_ADDRESS_SUCCESS = "[ACCOUNT ADDRESS] Update Address Success",
  UPDATE_ADDRESS_FAIL = "[ACCOUNT ADDRESS] Update Address Fail",
  DELETE_ADDRESS = "[ACCOUNT ADDRESS] Delete Address",
  DELETE_ADDRESS_SUCCESS = "[ACCOUNT ADDRESS] Delete Address Success",
  DELETE_ADDRESS_FAIL = "[ACCOUNT ADDRESS] Delete Address Fail",
  LOAD_ADDRESS = "[ACCOUNT ADDRESS] Load Address",
  LOAD_ADDRESS_SUCCESS = "[ACCOUNT ADDRESS] Load Address Success",
  LOAD_ADDRESS_FAIL = "[ACCOUNT ADDRESS] Load Address Fail",
  LOAD_ADDRESSES = "[ACCOUNT ADDRESS] Load Addresses",
  LOAD_ADDRESSES_SUCCESS = "[ACCOUNT ADDRESS] Load Addresses Success",
  LOAD_ADDRESSES_FAIL = "[ACCOUNT ADDRESS] Load Addresses Fail",
  CREATE_ORDER = "[ACCOUNT ORDER] Create Orders",
  CREATE_ORDER_SUCCESS = "[ACCOUNT ORDER] Create Orders Success",
  CREATE_ORDER_FAIL = "[ACCOUNT ORDER] Create Orders Fail",
  LOAD_ORDER = "[ACCOUNT ORDER] Load Order",
  LOAD_ORDER_SUCCESS = "[ACCOUNT ORDER] Load Order Success",
  LOAD_ORDER_FAIL = "[ACCOUNT ORDER] Load Order Fail",
  LOAD_ORDERS = "[ACCOUNT ORDER] Load Orders",
  LOAD_ORDERS_SUCCESS = "[ACCOUNT ORDER] Load Orders Success",
  LOAD_ORDERS_FAIL = "[ACCOUNT ORDER] Load Orders Fail",
  UPDATE_ORDER = "[ACCOUNT ORDER] Update Order",
  UPDATE_ORDER_SUCCESS = "[ACCOUNT ORDER] Update Order Success",
  UPDATE_ORDER_FAIL = "[ACCOUNT ORDER] Update Order Fail",
  DELETE_ORDER = "[ACCOUNT ORDER] Delete Order",
  DELETE_ORDER_SUCCESS = "[ACCOUNT ORDER] Delete Order Success",
  DELETE_ORDER_FAIL = "[ACCOUNT ORDER] Delete Order Fail",
  CANCEL_ORDER = "[ACCOUNT ORDER] Cancel Order",
  CANCEL_ORDER_SUCCESS = "[ACCOUNT ORDER] Cancel Order Success",
  CANCEL_ORDER_FAIL = "[ACCOUNT ORDER] Cancel Order Fail"
}
// export class LoginAccount implements Action {
//   readonly type = AccountActionTypes.LOAD_ACCOUNT
//   constructor(public payload:Login){}
// }
// export class LoginAccountSuccess implements Action {
//   readonly type = AccountActionTypes.LOAD_ACCOUNT_SUCCESS
//   constructor(public payload:Account){}
// }
// export class LoginAccountFail implements Action {
//   readonly type = AccountActionTypes.LOAD_ACCOUNT_FAIL
//   constructor(public payload:string){}
// }
export class LoadAccounts implements Action {
  readonly type = AccountActionTypes.LOAD_ACCOUNTS
  // constructor(public payload:string){}
}
export class LoadAccountsSuccess implements Action {
  readonly type = AccountActionTypes.LOAD_ACCOUNTS_SUCCESS
  constructor(public payload:Account[]){}
}
export class LoadAccountsFail implements Action {
  readonly type = AccountActionTypes.LOAD_ACCOUNTS_FAIL
  constructor(public payload:string){}
}
export class CreateAccount implements Action {
  readonly type = AccountActionTypes.CREATE_ACCOUNT
  constructor(public payload:RegisterAccount){}
}
export class CreateAccountSuccess implements Action {
  readonly type = AccountActionTypes.CREATE_ACCOUNT_SUCCESS
  constructor(public payload:Account){}
}
export class CreateAccountFail implements Action {
  readonly type = AccountActionTypes.CREATE_ACCOUNT_FAIL
  constructor(public payload:string){}
}
export class UpdateAccount implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT
  constructor(public payload:Account){}
}
export class UpdateAccountSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT_SUCCESS
  constructor(public payload:Update<Account>){}
}
export class UpdateAccountFail implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT_FAIL
  constructor(public payload:string){}
}
export class UpdateAccountPassword implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT_PASSWORD
  constructor(public payload:UpdatePassword){}
}
export class UpdateAccountPasswordSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT_PASSWORD_SUCCESS
  constructor(public payload:string){}
}
export class UpdateAccountPasswordFail implements Action {
  readonly type = AccountActionTypes.UPDATE_ACCOUNT_PASSWORD_FAIL
  constructor(public payload:string){}
}
export class CreateAddress implements Action {
  readonly type = AccountActionTypes.CREATE_ADDRESS
  constructor(public payload:Address){}
}
export class CreateAddressSuccess implements Action {
  readonly type = AccountActionTypes.CREATE_ADDRESS_SUCCESS
  constructor(public payload:Address[]){}
}
export class CreateAddressFail implements Action {
  readonly type = AccountActionTypes.CREATE_ADDRESS_FAIL
  constructor(public payload:string){}
}
export class UpdateAddress implements Action {
  readonly type = AccountActionTypes.UPDATE_ADDRESS
  constructor(public payload:Address){}
}
export class UpdateAddressSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_ADDRESS_SUCCESS
  constructor(public payload:Update<Address>){}
}
export class UpdateAddressFail implements Action {
  readonly type = AccountActionTypes.UPDATE_ADDRESS_FAIL
  constructor(public payload:string){}
}
export class DeleteAddress implements Action {
  readonly type = AccountActionTypes.DELETE_ADDRESS
  constructor(public payload:number){}
}
export class DeleteAddressSuccess implements Action {
  readonly type = AccountActionTypes.DELETE_ADDRESS_SUCCESS
  constructor(public payload:number){}
}
export class DeleteAddressFail implements Action {
  readonly type = AccountActionTypes.DELETE_ADDRESS_FAIL
  constructor(public payload:string){}
}
export class LoadAddress implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESS
  constructor(public payload:number){}
}
export class LoadAddressSuccess implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESS_SUCCESS
  constructor(public payload:Address){}
}
export class LoadAddressFail implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESS_FAIL
  constructor(public payload:string){}
}
export class LoadAddresses implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESSES
}

export class LoadAddressesSuccess implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESSES_SUCCESS
  constructor(public payload:Address[]){}
}
export class LoadAddressesFail implements Action {
  readonly type = AccountActionTypes.LOAD_ADDRESSES_FAIL
  constructor(public payload:string){}
}
export class CreateOrder implements Action {
  readonly type = AccountActionTypes.CREATE_ORDER
  constructor(public payload:Order){}
}
export class CreateOrderSuccess implements Action {
  readonly type = AccountActionTypes.CREATE_ORDER_SUCCESS
  constructor(public payload:Order){}
}
export class CreateOrderFail implements Action {
  readonly type = AccountActionTypes.CREATE_ORDER_FAIL
  constructor(public payload:string){}
}
export class LoadOrders implements Action {
  readonly type = AccountActionTypes.LOAD_ORDERS
}
export class LoadOrdersSuccess implements Action {
  readonly type = AccountActionTypes.LOAD_ORDERS_SUCCESS
  constructor(public payload:Order[]){}
}
export class LoadOrdersFail implements Action {
  readonly type = AccountActionTypes.LOAD_ORDERS_FAIL
  constructor(public payload:string){}
}
export class LoadOrder implements Action {
  readonly type = AccountActionTypes.LOAD_ORDER
  constructor(public payload:number){}
}
export class LoadOrderSuccess implements Action {
  readonly type = AccountActionTypes.LOAD_ORDER_SUCCESS
  constructor(public payload:Order){}
}
export class LoadOrderFail implements Action {
  readonly type = AccountActionTypes.LOAD_ORDER_FAIL
  constructor(public payload:string){}
}
export class UpdateOrder implements Action {
  readonly type = AccountActionTypes.UPDATE_ORDER
  constructor(public payload:Order){}
}
export class UpdateOrderSuccess implements Action {
  readonly type = AccountActionTypes.UPDATE_ORDER_SUCCESS
  constructor(public payload:Update<Order>){}
}
export class UpdateOrderFail implements Action {
  readonly type = AccountActionTypes.UPDATE_ORDER_FAIL
  constructor(public payload:string){}
}
export class CancelOrder implements Action {
  readonly type = AccountActionTypes.CANCEL_ORDER
  constructor(public payload:Order){}
}
export class CancelOrderSuccess implements Action {
  readonly type = AccountActionTypes.CANCEL_ORDER_SUCCESS
  constructor(public payload:Update<Order>){}
}
export class CancelOrderFail implements Action {
  readonly type = AccountActionTypes.CANCEL_ORDER_FAIL
  constructor(public payload:string){}
}
export class DeleteOrder implements Action {
  readonly type = AccountActionTypes.DELETE_ORDER
  constructor(public payload:number){}
}
export class DeleteOrderSuccess implements Action {
  readonly type = AccountActionTypes.DELETE_ORDER_SUCCESS
  constructor(public payload:number){}
}
export class DeleteOrderFail implements Action {
  readonly type = AccountActionTypes.DELETE_ORDER_FAIL
  constructor(public payload:string){}
}
export type Actions = LoadAccounts
                    |LoadAccountsSuccess
                    |LoadAccountsFail
                    |CreateAccount
                    |CreateAccountSuccess
                    |CreateAccountFail
                    |UpdateAccount
                    |UpdateAccountSuccess
                    |UpdateAccountFail
                    |UpdateAccountPassword
                    |UpdateAccountPasswordSuccess
                    |UpdateAccountPasswordFail
                    |CreateAddress
                    |CreateAddressSuccess
                    |CreateAddressFail
                    |UpdateAddress
                    |UpdateAddressSuccess
                    |UpdateAddressFail
                    |LoadAddress
                    |LoadAddressSuccess
                    |LoadAddressFail
                    |LoadAddresses
                    |LoadAddressesSuccess
                    |LoadAddressesFail
                    |CreateOrder
                    |CreateOrderSuccess
                    |CreateOrderFail
                    |LoadOrders
                    |LoadOrdersSuccess
                    |LoadOrdersFail
                    |LoadOrder
                    |LoadOrderSuccess
                    |LoadOrderFail
                    |UpdateOrder
                    |UpdateOrderSuccess
                    |UpdateOrderFail
                    |DeleteOrder
                    |DeleteOrderSuccess
                    |DeleteOrderFail
                    |CancelOrder
                    |CancelOrderSuccess
                    |CancelOrderFail;
