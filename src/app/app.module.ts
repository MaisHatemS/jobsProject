import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyJobPageComponent } from './component/my-job-page/my-job-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewjobComponent } from './component/addnewjob/addnewjob.component';
import { RouterModule } from '@angular/router';
import { JobserviceService } from './service/jobservice.service';
import { ModalService } from './service/modal.service';
import { JobCardComponent } from './component/job-card/job-card.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { JobDetailsComponent } from './component/job-details/job-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyJobPageComponent,
    AddnewjobComponent,
    JobCardComponent,
    CheckboxComponent,
    JobDetailsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
    
  ],
  providers: [JobserviceService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
