import {Component} from '@angular/core';
import { AF } from '../providers/angularfirebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public afService: AF, private router: Router) {
    this.afService.afAuth.auth.onAuthStateChanged(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['app-login']);
          this.isLoggedIn = false;
        }else {
          console.log('Successfully Logged in.');
          this.isLoggedIn = true;
        }
      }
    );
  }

  logout() {
    console.log('going out');
    this.afService.logout();
  }
}

