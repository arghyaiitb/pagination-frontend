import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishBookComponent } from './publish-book.component';
import { NewBookFormComponent } from './basic-details/new-book-form.component';
import { BookSettingsFormComponent } from './book-settings/book-settings-form.component';
import { UploadFileFormComponent } from './upload-files/upload-file-from.component';

const bookPublishRoutes: Routes = [
  {
    path: 'publish-book',
    children: [
      {
        path: '',
        component: PublishBookComponent
      },
      {
        path: 'basic-details',
        component: NewBookFormComponent
      },
      {
        path: 'book-settings',
        component: BookSettingsFormComponent
      },
      {
        path: 'upload-files',
        component: UploadFileFormComponent
      }
    ]
  }
];

export const bookPublishRouting: ModuleWithProviders = RouterModule.forChild(bookPublishRoutes);


