import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/component/login.component";
import {EmployeeComponent} from "./components/table/employee/employee.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'employee',
    component: EmployeeComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
