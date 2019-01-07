import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MypagenotfoundComponent } from './mypagenotfound/mypagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: "full"},
  {path: "login", component:LoginComponent},
  {path: "employee", component:EmployeeComponent},
  {path:"**", component:MypagenotfoundComponent}
];

// const routes: Routes = [
//   {path:"", redirectTo: '/dashboard', pathMatch: 'full'}, 
//   {path:"dashboard", component:DashboardComponent}, 
//   {path:"herolist", component:HerolistComponent}, 
//   {path:"herodetail/:id", component:HerodetailComponent}, 
//   {path:"tempadd", component:TempaddComponent}, 
//   {path:"**", component:MypagenotfoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const my_cust_routing_component = [LoginComponent]
