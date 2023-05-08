import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  setToken(token : string){
    localStorage.setItem('token',token)

  }
  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn(){
    return !!this.getToken()
  }
  login(user: IUser):Observable<{ token: string }>{
    return this.http.post<{ token: string}>('http://localhost:5000/auth/login',user)
      .pipe(
        tap(
          ({token})=>this.setToken(token)
        ))

  }
  register(user: IUser):Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:5000/auth/register', user)
  }
  logout(){
    localStorage.clear()
  }

}
