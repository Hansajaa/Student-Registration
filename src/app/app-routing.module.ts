import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { ViewStudentsComponent } from './pages/view-students/view-students.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"register",
    component:StudentRegistrationComponent
  },
  {
    path:"students",
    component:ViewStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
