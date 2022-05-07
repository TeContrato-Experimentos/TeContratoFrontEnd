import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AUTH} from "../model/AUTH";
import {catchError, retry} from "rxjs/operators";
import {User} from "../model/user"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basePath = 'http://localhost:3000/AUTH';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }


  constructor(private http: HttpClient) { }
  login(credentials: User): Observable<any>{
    console.log('credentials', credentials);

    return this.http.post(this.basePath + 'sign-in', JSON.stringify({
      email:credentials.Temail,
      password:credentials.Cpassword
    }), this.httpOptions)
  }

  register(user: any): Observable<any>{
    return this.http.post(this.basePath + 'sign-up', JSON.stringify({
      user: user.Nuser,
      email:user.Temail,
      password: user.Cpassword
    }), this.httpOptions)
  }

}
