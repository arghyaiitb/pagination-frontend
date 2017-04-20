import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'file-upload',
  templateUrl: './upload-file-form.component.html'
})
export class UploadFileFormComponent {
  @Input() multiple = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http) {
  }

  saveit() {
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    formData.append('file', inputEl.files);
      console.log(formData);
      // do whatever you do...
      // subscribe to observable to listen for response
    }
  }

