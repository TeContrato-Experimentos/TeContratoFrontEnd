import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Project} from "../model/project";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  basePath = 'http://localhost:3000/Project';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  constructor(private  http:HttpClient) { }

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

  // Create Project
  create(item: any): Observable<Project>{
    return this.http.post<Project>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Project by id
  getById(id: any):Observable<Project>{
    return this.http.get<Project>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All Project
  getAll(): Observable<Project>{
    return this.http.get<Project>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update Project
  update(id:any, item:any):Observable<Project>{
    return this.http.post<Project>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete Project

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
