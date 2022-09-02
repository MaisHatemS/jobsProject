import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  
  
 addNewJob=false;
 showJobDetails =false;
  dialog:any={
    show:false,
    aproved:false
  };
  constructor() { }

  
}