import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicDetails} from './new-book-model.interface';

import { JsonDataService } from '../shared/json-data.service';

@Component({
  selector: 'new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css'],
  providers: [JsonDataService]
})

export class NewBookFormComponent implements OnInit {
  public myForm: FormGroup; // our model driven form
  public book_info = false;
  // public service: JsonDataService;
  constructor(private _fb: FormBuilder, public service: JsonDataService) {
  } // form builder simplify form initialization

  ngOnInit() {

    this.myForm = this._fb.group({
      title: ['a', [Validators.required]],
      author: ['b', [Validators.required]],
      series: ['c', [Validators.required]],
      edition: ['d', [Validators.required]],
      description: ['e', [Validators.required]],
      keywords: ['f', [Validators.required]],
      reading_age: ['g', [Validators.required]],
      genre: ['h', [Validators.required]],
      publishing_rights: ['i', [Validators.required]]
    });

  }


  save(model: BasicDetails, isValid: boolean) {
    // call API to save
    // ...
    this.book_info = true;
    console.log(model, isValid);
    this.service.saveData('cool', model);
  }
}
