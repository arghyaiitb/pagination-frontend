import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './publish-book.interface';

@Component({
  selector: 'new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})

export class NewBookFormComponent implements OnInit {
  public myForm: FormGroup; // our model driven form

  // standing data
  public LANGUAGE_OPTIONS = {
    ENGLISH: 'english',
    HINDI: 'hindi',
    ORIYA: 'oriya'
  };

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {

      this.myForm = this._fb.group({
          name: ['Jane Doe'],
          languageSelector: this.initLanguageSelectorGroup()
      });

      


      this.setLanguageSelectorMethodType(this.LANGUAGE_OPTIONS.ENGLISH);
  }

  initLanguageSelectorGroup() {

    const group = this._fb.group({
          type: [''],
          english: this._fb.group(this.initLanguageSelectorEnglishModel()),
          hindi: this._fb.group(this.initLanguageSelectorHindiModel()),
          oriya: this._fb.group(this.initLanguageSelectorOriyaModel())
      });

    return group;
  }


  initLanguageSelectorEnglishModel() {
    const model = {
      english_font : ['Latin', [Validators.required]],
    };

    return model;
  }

  initLanguageSelectorHindiModel() {

    const model = {
      english_font : ['Latin', [Validators.required]],
      hindi_font : ['Devanagri', [Validators.required]]
    };

    return model;
  }

  initLanguageSelectorOriyaModel() {

    const model = {
      english_font : ['Latin', [Validators.required]],
      oriya_font : ['oriya', [Validators.required]]
    };

    return model;
  }


  setLanguageSelectorMethodType(type: string) {

    const ctrl: FormControl = (<any>this.myForm).controls.languageSelector.controls.type;
    ctrl.setValue(type);
  }

  save(model: Customer, isValid: boolean) {
      // call API to save
      // ...
      console.log(model, isValid);
  }
}
