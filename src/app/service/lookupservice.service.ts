import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookupserviceService {
  Port="http://localhost:3000";
  constructor(private http:HttpClient) { }



  getAllCountries(){
    return this.http.get<any>(this.Port+'/api/job/showCountry');
  }
  getAllCities(){
    return this.http.get<any>(this.Port+'/api/job/showCity');
  }
  getAllSectors(){
    return this.http.get<any>(this.Port+'/api/job/showSector');
  }
}
