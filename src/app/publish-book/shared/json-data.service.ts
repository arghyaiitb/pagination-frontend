import { Injectable } from '@angular/core';

@Injectable()
export class JsonDataService {
   public userss = 1;

  saveData(name: string, form1: any) {
    // this.userss.push(name: {form1});
    this.userss = this.userss + 1;
    console.log(name);
    console.log(this.userss);
  };
}
