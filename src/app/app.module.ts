import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, my_cust_routing_component } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { from } from 'rxjs';
import { MypagenotfoundComponent } from './mypagenotfound/mypagenotfound.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeIndComponent } from './employee/employee-ind/employee-ind.component';
import { EmployeeService } from './servicess/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    my_cust_routing_component,
    MypagenotfoundComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeIndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
