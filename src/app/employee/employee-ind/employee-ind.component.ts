import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/servicess/employee.service';

@Component({
  selector: 'app-employee-ind',
  templateUrl: './employee-ind.component.html',
  styleUrls: ['./employee-ind.component.sass']
})
export class EmployeeIndComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.resetFormdatas();
  }

  resetFormdatas(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      emp_name: '',
      email: '',
      phone_num: null,
      dob: '',
      password: ''
    };
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // this.service.postEmployees(form.value).subscribe(data => this.individual_city = data, error => this.error_msg = error);
    this.service.postEmployees(form.value).subscribe(res => {

    });
  }

}
