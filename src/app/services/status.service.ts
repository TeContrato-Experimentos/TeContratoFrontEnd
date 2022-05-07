import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Status} from "../model/Status";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  basePath = 'http://localhost:3000/Status';

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

  // Create Status
  create(item: any): Observable<Status>{
    return this.http.post<Status>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Status by id
  getById(id: any):Observable<Status>{
    return this.http.get<Status>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All Status
  getAll(): Observable<Status>{
    return this.http.get<Status>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update Status
  update(id:any, item:any):Observable<Status>{
    return this.http.post<Status>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete Status

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }



}
