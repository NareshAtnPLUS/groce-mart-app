export interface Login {
  username:string;
  password:string;
}
export interface LoginResponse {
  jwtToken:any;
  refreshToken:any
}
