import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EmployeeslistComponent } from './employees/employeeslist/employeeslist.component';
import { EmployeedetailsComponent } from './employees/employeedetails/employeedetails.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { UserslistComponent } from './users/userslist/userslist.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addemployee', component: AddemployeeComponent },
  {path: 'employeelist', component: EmployeeslistComponent},
  { path: 'employeelist/:id', component: EmployeedetailsComponent },
  { path: 'editemployee/:id', component: EditemployeeComponent },
  { path: 'userlist', component: UserslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                                  RegisterComponent,
                                  HomeComponent,
                                  EmployeeslistComponent,
                                  EditemployeeComponent,
                                  EmployeedetailsComponent,
                                  EmployeedetailsComponent,
                                  AddemployeeComponent,
                                  UserslistComponent
]
