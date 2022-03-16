import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './modules/studentlist/studentlist.component';
import { TeacherlistComponent } from './modules/teacherlist/teacherlist.component';

import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
{
  path: 'dashboard',
  component:DefaultComponent,
  children: 
  [
  {
    path:'studentlist',
    component:StudentlistComponent
  },
  {
    path:'visitorlist',
    component:LoginComponent
  },
  {
    path:'teacherlist',
    component:TeacherlistComponent
  },
  ]
},
{
  path:'login',
  component:LoginComponent,
},
{
  path:'', redirectTo:'login', pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
