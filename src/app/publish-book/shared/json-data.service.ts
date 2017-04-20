import {Injectable} from '@angular/core';

@Injectable()
export class JsonDataService {
  public us = '{{';

  saveData(name: string, form1: any) {
    if (this.us === '{{') {
      this.us =  JSON.stringify(form1);
    } else {
      this.us = this.us.slice(0, -1) + ',' + JSON.stringify(form1).slice(1);
    }
    console.log(JSON.parse(this.us));


  };
}
