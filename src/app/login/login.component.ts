import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AF} from '../../providers/angularfirebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(public afService: AF, private router: Router) {
  }

  login() {
    this.afService.login().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['/home']);
    });
  }
}
