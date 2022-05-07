import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodOwnerService {

  basePath = 'http://localhost:3000/PaymentMethodOwner';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    } else{
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something happened with request, please try again later');
  }



}
