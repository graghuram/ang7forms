import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  readonly service_url = "Reag";

  constructor(private http: HttpClient) { }

  postEmployees(formData: Employee) {
    return this.http.post(this.service_url+'/Employee', formData);
  }

}
