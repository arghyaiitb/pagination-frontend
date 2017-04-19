import { Injectable } from '@angular/core';
// import {  } from '../basic-details/new-book-model.interface';

@Injectable()
export class JsonDataService {
  // user: InputFromUser;

  saveData(name: string, form: any) {
    console.log(name);
    console.log(form);
  };
}
