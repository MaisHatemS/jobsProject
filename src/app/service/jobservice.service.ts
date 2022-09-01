import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Job } from '../models/job';
import { JsonPipe } from '@angular/common';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  //do not need to stringify your body

 Port="http://localhost:3000";
  constructor(private http:HttpClient) { }

  public getAllJobs(page?:any,limit?:any):Observable<any>{
    let params = new HttpParams();
    params = params.append('_page',page);
    params = params.append('_limit', limit);
   return this.http.get<any>(this.Port+'/api/job',{params:params});
   // return this.http.get<any>(endpoint);
  }

  addNewJob(job:Job):Observable<any>{
  
    return this.http.post(this.Port+'/api/job/store', job);
    

  }
  public getJobById(id:any):Observable<any>{
    let myData = this.http.get<any>(this.Port+"/api/job/show"+id);
    return myData;
  }
  public deleteJob(id:any):Observable<any>{
   const body = {
      "_id":id
  } 

    return this.http.post(this.Port+'/api/job/destroy' , body);

  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
  

}
