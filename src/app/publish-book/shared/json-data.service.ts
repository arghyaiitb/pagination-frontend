import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class JsonDataService {

  public us = '{{';


  constructor(private http: Http) {

  }


  saveData(name: string, form1: any) {
    if (this.us === '{{') {
      this.us = JSON.stringify(form1);
    } else {
      this.us = this.us.slice(0, -1) + ',' + JSON.stringify(form1).slice(1);
    }
    console.log(JSON.parse(this.us));
  };


  //
  postData(data: FormData): Observable<boolean> {
    console.log('hittng send post data  ');
    return this.http.post('https://storymirror.com/ebooks/admin/products/update', data)
      .map(this.extractData)
      .catch(this.handelError);
  }

  private extractData(res: any) {
    let body = res.json();
    console.log(body);
    return body || [];
  }

  private handelError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);

  }

  //


}
