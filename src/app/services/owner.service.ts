import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Contractor} from "../model/contractor";
import {catchError, retry} from "rxjs/operators";
import {Owner} from "../model/owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  basePath = 'http://localhost:3000/owner';

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

  // Create Owner
  create(item: any): Observable<Owner>{
    return this.http.post<Owner>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Owner by id
  getById(id: any):Observable<Owner>{
    return this.http.get<Owner>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All Owner
  getAll(): Observable<Owner>{
    return this.http.get<Owner>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update Owner
  update(id:any, item:any):Observable<Owner>{
    return this.http.post<Owner>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete Owner

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
