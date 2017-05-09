import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AF} from '../../providers/angularfirebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(public afService: AF, private router: Router) {}
  login() {
    this.afService.login().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['/home']);
    });
  }
}
