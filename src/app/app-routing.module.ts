import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component'
import {CreateStudentComponent} from './create-student/create-student.component'
import {ViewStudentComponent} from './view-student/view-student.component'
const routes: Routes = [
  {
    path:'',
    component: HomeComponentComponent
  },
  {
  path: 'createStudent',
    component: CreateStudentComponent,
  },
  {
    path: 'viewStudent/:regno',
      component: ViewStudentComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
