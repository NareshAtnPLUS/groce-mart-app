export interface Account {
  id?:string;
  username:string;
  fullName:{
    firstName:string;
    lastName:string;
  }
  email:string;
  mobileNumber:string
}
