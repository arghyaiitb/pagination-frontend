import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {AF} from '../../../providers/angularfirebase';


@Injectable()
export class JsonDataService {
  public userid: string;
  public us = '{{';
  public response: any[];


  constructor(private http: Http, public authservice: AF, public router: Router) {

  }


  saveData(name: string, form1: any) {
    this.authservice.afAuth.auth.onAuthStateChanged((auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['app-login']);
        } else {
          console.log('logged in');
          this.userid = auth.uid;
        }
      }
    );
    form1['userid'] = this.userid;
    // console.log(this.userid);
    if (this.us === '{{') {
      this.us = JSON.stringify(form1);
    } else {
      this.us = this.us.slice(0, -1) + ',' + JSON.stringify(form1).slice(1);
      const valu = JSON.parse(this.us);
      console.log('hittng send post data  ');
      this.http.post('http://127.0.0.1:8001/bookdetails/', valu)
        .toPromise()
        .then(response => this.response = response.json())
        .catch(this.handleError);
      console.log('res');
      console.log(this.response);
      this.us = '{{';
    }
    console.log(this.us);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  //
  postData(data: FormData): Observable<boolean> {
    console.log('hittng send post data  ');
    return this.http.post('http://127.0.0.1:8001/fileupload/', data)
      .map(this.extractData)
      .catch(this.handelError);
  }

  private extractData(res: any) {
    const body = res.json();
    console.log(body);
    return body || [];
  }

  private handelError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);

  }

  //


}
