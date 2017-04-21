import {Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {JsonDataService} from '../shared/json-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'file-upload',
  templateUrl: './upload-file-form.component.html'
})
export class UploadFileFormComponent implements OnInit {
  @Input() multiple = true;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http, public service: JsonDataService, private router: Router) {
  }

  ngOnInit() {
    const a = {
      "name": "morpheus",
      "job1": "leader"
    };
    // grab users
    this.http.get('https://reqres.in/api/users')
      .subscribe(data => console.log(data.json())
      );
  }

  saveit() {
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    formData.append('file', inputEl.files);
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('file[]', inputEl.files.item(i));
      }
      // this.http.post('http://localhost/~/angular/', formData);
      // this.sendfile(formData).subscribe(console.log());
      this.http.post('http://localhost:4200/', formData).subscribe(result => console.log(result));
      // do whatever you do...
      // subscribe to observable to listen for response
    }
    // console.log(formData);
    // this.service.saveData('cool2', formData); this is not working since it is not json type
  }
  sendfile(formData: FormData) {
    return this.http.get('http://localhost/~/angular/', formData);
  }
}

