import {BrowserModule} from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import {appRouting} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PublishBookComponent} from './publish-book/publish-book.component';
import {AboutComponent} from './about/about.component';
import {RecentlyPublishedComponent} from './recently-published/recently-published.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {NewBookFormComponent} from './publish-book/basic-details/new-book-form.component';
import {BookSettingsFormComponent} from './publish-book/book-settings/book-settings-form.component';

import {SimpleDemoComponent} from './publish-book/upload-files/upload-file-from.component';
import { JsonDataService } from './publish-book/shared/json-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublishBookComponent,
    AboutComponent,
    RecentlyPublishedComponent,
    PageNotFoundComponent,

    NewBookFormComponent,
    BookSettingsFormComponent,
    SimpleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
