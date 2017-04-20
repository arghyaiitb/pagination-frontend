import {NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import {CommonModule} from '@angular/common';


import {NewBookFormComponent} from './basic-details/new-book-form.component';
import {BookSettingsFormComponent} from './book-settings/book-settings-form.component';
import {UploadFileFormComponent} from './upload-files/upload-file-from.component';
import {bookPublishRouting} from './publish-book-routing.module';
import {PublishBookComponent} from './publish-book.component';

@NgModule({
  declarations: [
    NewBookFormComponent,
    BookSettingsFormComponent,
    UploadFileFormComponent,
    PublishBookComponent
  ],
  imports: [
    bookPublishRouting,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  exports: [PublishBookComponent],
  providers: []
})
export class BookPublishModule {
}
