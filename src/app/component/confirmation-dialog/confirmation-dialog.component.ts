import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JobserviceService } from 'src/app/service/jobservice.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {


  @Input() jobId:any;
  constructor(public modalservice:ModalService
    ,private JobserviceService:JobserviceService) { }

  ngOnInit(): void {
 
  }

  approved(event:any){
    
      console.log("hi there Iam in ");
        this.modalservice.dialog.show=false;
    this.JobserviceService.deleteJob(this.jobId).subscribe(e=>{
      console.log(e);
      this.modalservice.dialog.aproved=false;
      this.JobserviceService.jobsChanged.forEach(e=>{
        e.forEach(x=>{
          if(x._id==this.jobId){
            e.splice(e.indexOf(x),1);
          }
        })
       
      })
       window.location.reload();
     
        })
      
  }
     

}
