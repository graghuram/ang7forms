import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  firstname: String;
  lastname: String;
  email;
  password;
  dob;

  constructor() { }

  ngOnInit() {
  }

  SaveRecord() {
    console.log(this);
    // console.log(this.firstname);
    // console.log(this.lastname);
    // console.log(this.email);
    // console.log(this.password);
    // console.log(this.dob);
  }

}
