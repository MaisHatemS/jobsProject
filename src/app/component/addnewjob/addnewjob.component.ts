import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { JobFile } from 'src/app/models/file';
import { Job } from 'src/app/models/job';
import { Sector } from 'src/app/models/sector';
import { JobserviceService } from 'src/app/service/jobservice.service';
import { LookupserviceService } from 'src/app/service/lookupservice.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-addnewjob',
  templateUrl: './addnewjob.component.html',
  styleUrls: ['./addnewjob.component.scss']
})
export class AddnewjobComponent implements OnInit {

  selectedFile:File;
  title:string ="Add New Job Post"
   public jobform:Job;
   countries:Country[]=[];
   sectors:Sector[]=[];
   cities:City[]=[];
  constructor(
    private jobServer:JobserviceService,
      public modalService: ModalService,
      private router:Router,
      private lookupService:LookupserviceService
  ) {

    this.jobform=new Job();


  }

  ngOnInit() :void{
   
    this.getAllLookup();
  }
  getAllLookup(){
    this.lookupService.getAllCities().subscribe(e=>{
      this.cities=e.response;

    });
    this.lookupService.getAllCountries().subscribe(e=>{
      this.countries=e.response;
    });
    this.lookupService.getAllSectors().subscribe(e=>{
      this.sectors=e.response;
    });
  }
  cancel() {
    console.log("cancel");
    this.modalService.addNewJob=false;
  }
  onSubmit(form:NgForm){
//     console.log(this.selectedFile.name);
//     const formdata=new FormData();    
//       formdata.append("jobimg", this.selectedFile, this.selectedFile.name);
// this.jobform.jobImg=formdata;
    this.jobServer.addNewJob(this.jobform).subscribe(e=>{
      window.location.reload();

    });
  }
  onFileSelected(event:any){
    console.log(event);
    this.selectedFile= event.target.files[0];
    
  }
}