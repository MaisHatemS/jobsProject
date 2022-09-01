import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { filter, fromEvent,debounceTime ,distinctUntilChanged,tap} from 'rxjs';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Job } from 'src/app/models/job';
import { Sector } from 'src/app/models/sector';
import { JobserviceService } from 'src/app/service/jobservice.service';
import { LookupserviceService } from 'src/app/service/lookupservice.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-my-job-page',
  templateUrl: './my-job-page.component.html',
  styleUrls: ['./my-job-page.component.scss']
})
export class MyJobPageComponent implements OnInit {

  job:Job[] =[];
  countries:Country[]=[];
  sectors:Sector[]=[];
  cities:City[]=[];
  jobDetails:Job={
    _id: 0, country: new Country ,city: new City, description: " ",
    title: ' ',
    sector: new Sector
  };
  object:any;
  @ViewChild('searchinput') input: ElementRef;
  constructor(private JobserviceService:JobserviceService
    ,public modalService: ModalService
    ,private lookupService:LookupserviceService) { 



  }

 
  ngOnInit(): void {
    this.getAllLookup();
  }
  ngAfterViewInit() {
    // server-side search
  fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.input.nativeElement.value)
        })
    )
    .subscribe();
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

 
 
 
  AddNewJob(){
    console.log("Iam in");

    this.modalService.addNewJob=true;
   //const modalRef = this.modalService.open(AddnewjobComponent, { title: 'My dynamic title', message: 'My dynamic message' });
  }
  onFilterChange(options:any){
    this.object=options;
    


  }

  applyTitleFilter(event:any){

    console.log(event.target.value);

  }

  showJobDetails(details:any){
  this.jobDetails=details;
  this.modalService.showJobDetails=true;

  }


}
