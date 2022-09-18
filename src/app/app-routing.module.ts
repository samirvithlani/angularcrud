import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';

const routes: Routes = [

  {
    path:'addstudent',component:AddstudentComponent
  },
  {
    path:'liststudent',component:ListstudentComponent
  },
  {
    path:'updatestudent/:id',component:UpdatestudentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
