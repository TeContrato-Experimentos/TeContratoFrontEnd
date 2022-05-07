import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Budget} from "../model/budget";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  basePath = 'http://localhost:3000/budget';

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

  create(item: any): Observable<Budget>{
    return this.http.post<Budget>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  // Get Budget by id
  getById(id: any):Observable<Budget>{
    return this.http.get<Budget>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All Budget
  getAll(): Observable<Budget>{
    return this.http.get<Budget>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update Budget
  update(id:any, item:any):Observable<Budget>{
    return this.http.post<Budget>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete Budget

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
