import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }


  signupUser(email: string | null , password: string | null ) {

    firebase.auth().createUserWithEmailAndPassword(email, password).then( res => {
      this.router.navigate(['/home']);
      console.log(res);
    })
      .catch(
       error => console.log(error) );


    }


    singinUser(email: string | null , password: string | null) {
      firebase.auth().signInWithEmailAndPassword(email , password)
       .then( res => {
         this.router.navigate(['/home']);

        }  )
        .catch(
           error => console.log(error) );
    }

    getToken() {
      return firebase.auth().currentUser.getIdToken();
    }
}
