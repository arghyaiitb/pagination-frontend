import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewBook } from './publish-book.model';

@Component({
  selector: 'new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})

export class NewBookFormComponent implements OnInit {
  form : FormGroup;

  constructor(private _formbuilder: FormBuilder) {}


ngOnInit() {
  this.form = this._formbuilder.group({
    name: ['Argo', [Validators.required]],
    username: ['@argo', [Validators.required]]
  });
  console.log(this.form);
}
processForm()
{
  console.log("its working", this.form.value);
}
}
