import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  
  @Input() details:Job;
  constructor( public modalService: ModalService) { }

  ngOnInit(): void {
 

  }
  close(){
    this.modalService.showJobDetails=false;

  }

}
