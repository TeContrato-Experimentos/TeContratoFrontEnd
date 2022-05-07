import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Posts} from "../model/posts";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  basePath = 'http://localhost:3000/Posts';

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

  // Create Posts
  create(item: any): Observable<Posts>{
    return this.http.post<Posts>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get Posts by id
  getById(id: any):Observable<Posts>{
    return this.http.get<Posts>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Get All Posts
  getAll(): Observable<Posts>{
    return this.http.get<Posts>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Update Posts
  update(id:any, item:any):Observable<Posts>{
    return this.http.post<Posts>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Delete Posts

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
