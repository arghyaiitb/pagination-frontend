import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookPrintInfo} from './book-settings-model.interface';
import {BookSettings, languageAvailable, templates} from './book-settings-template';

import { JsonDataService } from '../shared/json-data.service';


@Component({
  selector: 'book-settings',
  templateUrl: './book-settings-form.component.html',
  styleUrls: ['./book-settings-form.component.css'],
  providers: [JsonDataService]
})

export class BookSettingsFormComponent implements OnInit {
  public templates = templates;
  public bookForm: FormGroup; // our model driven form
  private selected_template: BookSettings;
  public languagesAvailable = languageAvailable;
  public userSelected = false;

  constructor(private _fb: FormBuilder, public service: JsonDataService) {
  } // form builder simplify form initialization

  ngOnInit() {
    this.bookForm = this._fb.group({
      book_dimension_template: ['', [Validators.required]],
      book_dimension: this.initBookdimensionGroup(),
      language_font: this.initLanguageFontGroup(),
      margin: this.initMarginSettingsGroup(),
      addons: this.initAdditionalFeaturesGroup()
    });
  }

  // BookDimensions functions start here **************************

  initBookdimensionGroup() {
    return this._fb.group({
      page_width: ['', Validators.required],
      page_heigth: ['', Validators.required]
    });

  }

  // BookDimensions functions end here ################################


  // Language functions start here **************************

  initLanguageFontGroup() {
    return this._fb.group({
      language: ['', [Validators.required]],
      font: this._fb.group(this.initLanguageSelectorModel()),
      font_size: ['', [Validators.required]]
    });

  }

  initLanguageSelectorModel() {

    return  {
      primary_font: ['', [Validators.required]],
      secondary_font: ['', [Validators.required]]
    };

  }

  // Language functions End here ###################################

  // Margin functions start here **************************

  initMarginSettingsGroup() {
    return this._fb.group({
      top_margin: ['', [Validators.required]],
      bottom_margin: ['', [Validators.required]],
      inner_margin: ['', [Validators.required]],
      outer_margin: ['', [Validators.required]],
      line_spacing: ['', [Validators.required]],
      paragraph_spacing: ['', [Validators.required]]
    });

  }

  // Margin functions End here ###################################


  // Addons functions start here **************************

  initAdditionalFeaturesGroup() {
    return this._fb.group({
      header: ['', [Validators.required]],
      footer: ['', [Validators.required]]
    });

  }

  // Addons functions End here ###################################


  // Form control starts here
  loadvalues() {
    this.bookForm.reset({
      book_dimension_template: this.selected_template.book_dimension_template,
      book_dimension: this.selected_template.book_dimension,
      language_font: this.selected_template.language_font,
      margin: this.selected_template.margin,
      addons: this.selected_template.addons
    });
  }

  loadtemplate(template: BookSettings) {
    this.selected_template = template;
    this.userSelected = true;
    this.loadvalues();
  }

  save(model: BookPrintInfo, isValid: boolean) {
    // call API to save
    // ...
    console.log(model, isValid);
    this.service.saveData('cool1', model);

  }  // Form control starts here

}
