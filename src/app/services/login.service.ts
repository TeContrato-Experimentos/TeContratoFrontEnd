import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  basePath = 'http://localhost:3000/AUTH';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  // API Error Handling

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getAllUsers() {
    return this.http.get(`${this.basePath}`).pipe(retry(2), catchError(this.handleError));
  }

  updateUser(id: number, item: User): Observable<User> {
    return this.http.put<User>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
