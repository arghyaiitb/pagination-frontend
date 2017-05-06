import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {JsonDataService} from '../shared/json-data.service';
import {Router} from '@angular/router';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'file-upload',
  templateUrl: './upload-file-form.component.html'
})
export class UploadFileFormComponent {

  data : any;
  errors : any;


  @Input() multiple = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http, public jsonDataService: JsonDataService, private router: Router) {
  }

  saveit() {

    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    formData.append('file', inputEl.files[0]);


    this.jsonDataService.postData(formData).subscribe(
      data => this.data = data,
      error => this.errors = <any>error
    );

  }


}

