import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  register(form) {
    console.log(form.value);
  }
}
