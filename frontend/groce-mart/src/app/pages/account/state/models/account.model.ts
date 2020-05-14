export interface RegisterAccount {
  id?:number;
  firstName:string;
  lastName:string;
  email:string;
  mobileNumber:string;
  passoword:string;
}
export interface Account {
  id?:number;
  firstName:string;
  lastName:string;
  email:string;
  mobileNumber:string;
}
export interface RegisterResponse {
  firstName:string;
  lastName:string;
}
export interface Login{
  userName:string;
  password:string;
}
export interface UpdatePassword{
  password:string;
  confirmPassword:string;
}
export interface Address {
  doorNo:string;
  streetName:string;
  district:string;
  zipCode:string;
  state:string;
}
export interface Order{
  product:[],
  userId:string;
  priceDetails:{};
  quantity:number;
  address:Address;
  orderDate:Date;
  id?:string;

}
