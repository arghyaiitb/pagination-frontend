import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {JsonDataService} from '../shared/json-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'file-upload',
  templateUrl: './upload-file-form.component.html'
})
export class UploadFileFormComponent {
  @Input() multiple = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  constructor(private http: Http, public service: JsonDataService, private router: Router) {
  }

  saveit() {
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    formData.append('file', inputEl.files);
    // this.service.saveData('cool2', formData); this is not working since it is not json type
  }
}

