import { Injectable } from '@angular/core';


interface AuthResponseData{
  kind: string,
  idToken:string,
  email:string,
  refreshToken:string,
  expriesIn:string,
  localId:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
