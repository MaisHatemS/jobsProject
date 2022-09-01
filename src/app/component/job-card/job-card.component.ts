import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobserviceService } from 'src/app/service/jobservice.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  size: number = 10;
  listSizes: any = [10, 25, 50, 100];
  jobList:Job[]=[];
  @Output() onClick=new EventEmitter();
@Input() CheckBoxChanges:any;
@Input() query: string;
  constructor(private JobserviceService:JobserviceService,private router :Router
    ,private modalService:ModalService) { }

  ngOnInit(): void {
    this.getAll(this.page,this.size);
    this.JobserviceService.jobsChanged.subscribe(jobs => {
      
      this.jobList=jobs;
    })
    // console.log(this.onFilterChange);
  }
  getAll(page:any,size:any){// get All Jobs


    this.JobserviceService.getAllJobs(this.page,this.size).subscribe(e=>
      {
        this.jobList=e.response.docs;
        this.count=e.response.totalDocs;
      }
      

      );
  }

  onDelete(event:any,jobId:any){

    this.modalService.showConfirmDialog=true;
    if(confirm("Are you sure to delete "+jobId)) {
      window.location.reload();
      this.JobserviceService.deleteJob(jobId).subscribe(e=>{

      })
    }
    
    
  }
  showJobDetails(event:any,job:Job){//get spacific Job by Id number
    this.onClick.emit(job);
  }

  onDataChange(event: any) {
    this.page = event;
    this.getAll(this.page,this.size);
  }
  onSizeChange(event: any): void {
    this.size = event.target.value;
    this.page = 1;
    this.getAll(this.page,this.size);
  }
  afterFilterChange(){

  }

}
