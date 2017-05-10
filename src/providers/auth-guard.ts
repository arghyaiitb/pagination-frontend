// /**
//  * Created by argo on 10/05/17.
//  */
//
// import { Component, OnInit, Injectable } from '@angular/core';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import {CanActivate, Router} from '@angular/router';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
//
// import { AF } from './angularfirebase';
//
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   public isLoggedIn: boolean;
//
//   constructor(public afService: AF, private router: Router) {
//     this.afService.afAuth.auth.onAuthStateChanged(
//       (auth) => {
//         if (auth == null) {
//           console.log('Not Logged in.');
//           this.router.navigate(['app-login']);
//           this.isLoggedIn = false;
//         }else {
//           console.log(auth.uid);
//           this.isLoggedIn = true;
//         }
//       }
//     );
//   }
//   canActivate(){
//
//   }
//
// }
