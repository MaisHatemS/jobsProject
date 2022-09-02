import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewjobComponent } from './component/addnewjob/addnewjob.component';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { JobDetailsComponent } from './component/job-details/job-details.component';
import { MyJobPageComponent } from './component/my-job-page/my-job-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/jobs',pathMatch:'full'}, 
  {path:"jobs",component:MyJobPageComponent},
//   {path:"addnewJob",component:AddnewjobComponent},
//   {path:"showDetails",component:JobDetailsComponent},
//   {path:"showDialog",component:ConfirmationDialogComponent}
// ];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AddnewjobComponent,
  MyJobPageComponent,
  JobDetailsComponent,
  ConfirmationDialogComponent
];