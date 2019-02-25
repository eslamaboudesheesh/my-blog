import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

  onSubmit( form: NgForm) {
    console.log(form.value);
    const email =  form.value.email;
    const password = form.value.pwd;
    this.authServ.signupUser(email , password);
  }
}



