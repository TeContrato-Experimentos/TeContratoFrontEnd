import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ProjectControl} from "../model/ProjectControl";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectControlService {

  basePath = 'http://localhost:3000/ProjectControl';

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

  // Create ProjectControl
  create(item: any): Observable<ProjectControl>{
    return this.http.post<ProjectControl>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get ProjectControl by id
  getById(id: any):Observable<ProjectControl>{
    return this.http.get<ProjectControl>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All ProjectControl
  getAll(): Observable<ProjectControl>{
    return this.http.get<ProjectControl>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update ProjectControl
  update(id:any, item:any):Observable<ProjectControl>{
    return this.http.post<ProjectControl>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete ProjectControl

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
