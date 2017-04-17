import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookPrintInfo } from './book-settings-model.interface';
import { BookSettings, templates } from './book-settings-template';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'book-settings',
  templateUrl: './book-settings-form.component.html',
  styleUrls: ['./book-settings-form.component.css']
})

export class BookSettingsFormComponent implements OnInit {
  public templates = templates;
  public bookForm: FormGroup; // our model driven form
  private selected_template: BookSettings;

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
    this.bookForm = this._fb.group({
        book_dimension_template : ['', [Validators.required]],
        book_dimension: this.initBookdimensionGroup(),
        language_font: this.initLanguageFontGroup(),
        margin: this.initMarginSettingsGroup(),
        addons: this.initAdditionalFeaturesGroup()
      });
    }

// BookDimensions functions start here **************************

initBookdimensionGroup(){
        const group = this._fb.group({
        page_width: ['', Validators.required],
        page_heigth: ['', Validators.required]
      });

      return group;
}

// BookDimensions functions end here ################################


// Language functions start here **************************

initLanguageFontGroup(){
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
    english_font : ['', [Validators.required]],
  };

  return model;
}

initLanguageSelectorHindiModel() {

  const model = {
    english_font : ['', [Validators.required]],
    hindi_font : ['', [Validators.required]]
  };

  return model;
}

initLanguageSelectorOriyaModel() {

  const model = {
    english_font : ['', [Validators.required]],
    oriya_font : ['', [Validators.required]]
  };

  return model;
}

// Language functions End here ###################################


initMarginSettingsGroup(){}
initAdditionalFeaturesGroup(){}

  loadvalues() {
    this.bookForm.reset({
      book_dimension_template: this.selected_template.book_dimension_template,
      book_dimension: this.selected_template.book_dimension,
      language_font: this.selected_template.language_font
    });
  }

  loadtemplate(template: BookSettings){
    this.selected_template = template;
    this.loadvalues();
  }



}
