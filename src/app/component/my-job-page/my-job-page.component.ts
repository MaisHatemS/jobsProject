import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { filter, fromEvent,debounceTime ,distinctUntilChanged,tap, Subscription} from 'rxjs';
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
export class MyJobPageComponent implements OnInit ,OnDestroy{

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
  jobsSub$: Subscription;
  @ViewChild('searchinput') input: ElementRef;
  constructor(private JobserviceService:JobserviceService
    ,public modalService: ModalService
    ,private lookupService:LookupserviceService) { 



  }

 
  ngOnInit(): void {
    this.getAllLookup();
  }
ngOnDestroy(): void {
  this.jobsSub$?.unsubscribe();
}

  ngAfterViewInit() {
    // server-side search
  fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        filter(Boolean),
        debounceTime(300),
        distinctUntilChanged(),
        tap((text) => {
          const query = this.input.nativeElement.value;
          console.log("query", query)
           this.jobsSub$ = this.JobserviceService.getAllJobs(1,10,query).subscribe();
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
