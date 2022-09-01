import {Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ModalService {

 addNewJob=false;
 showJobDetails =false;
 showConfirmDialog=false;
  constructor() { }
  
}