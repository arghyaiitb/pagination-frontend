import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BasicDetails } from './new-book-model.interface';

@Component({
  selector: 'new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})

export class NewBookFormComponent implements OnInit {
  public myForm: FormGroup; // our model driven form


  public LANGUAGE_OPTIONS = {
    ENGLISH: 'english',
    HINDI: 'hindi',
    ORIYA: 'oriya'
  };

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {

    this.myForm = this._fb.group({
      title: ['Title of the ebook', [Validators.required]],
      author: ['Book Author', [Validators.required]],
      series: ['Yes', [Validators.required]],
      edition: ['First', [Validators.required]],
      description: [' Anything', [Validators.required]],
      keywords: ['', [Validators.required]],
      reading_age: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      publishing_rights: ['Story_mirror']
    });

  }


  save(model: BasicDetails, isValid: boolean) {
    // call API to save
    // ...
    console.log(model, isValid);
  }
}
