import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, count, Observable, tap, throwError,  } from 'rxjs';
import { Job } from '../models/job';
import { JsonPipe } from '@angular/common';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  //do not need to stringify your body
  jobs: Job[];
 Port="http://localhost:3000";
 jobsChanged: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>([])
  constructor(private http:HttpClient) { }

  public getAllJobs(page?:any,limit?:any,query?:any,country?:any,city?:any,sector?:any):Observable<any>{
    console.log(query);
    let params = new HttpParams();
    params = params.append('_page',page);
    params = params.append('_limit', limit);
    if(city)
    params = params.append('city',city);
    if(country)
    params = params.append('country',country);
    if(sector)
    params = params.append('sector',sector);
    if(query)
    params = params.append('query',query);
   return this.http.get<any>(this.Port+'/api/job',{params:params}).pipe(
    tap(response => {
      console.log("response", response);
      
      this.jobs = response.response.docs;
      this.jobsChanged.next([...this.jobs]);
    })
   );
   // return this.http.get<any>(endpoint);
  // return this.http.get<any>(this.Port+'/api/job',{params:params});
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
