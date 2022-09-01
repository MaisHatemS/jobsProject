import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { Sector } from 'src/app/models/sector';
import { LookupserviceService } from 'src/app/service/lookupservice.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {


  @Input() title="";
  @Input() options:any=[];
  @Output() onChange=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 

  onCheckChange(event:any,option:any){
    let options = this.options.map((e:any)=>{
      if(e._id==option._id ){

        e.isChecked=event.currentTarget.checked;
      
      }
      return e;
    });

    this.onChange.emit(options);
  }

}
