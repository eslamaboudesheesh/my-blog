import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServe: AuthService) { }

  ngOnInit() {
  }

  onSign( form: NgForm) {
    const email = form.value.email;
    const password = form.value.pwd;
    this.authServe.singinUser(email , password);
  }

}
