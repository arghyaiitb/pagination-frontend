import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {appRouting} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RecentlyPublishedComponent} from './recently-published/recently-published.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {BookPublishModule} from './publish-book/publish-book.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecentlyPublishedComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    appRouting,
    BookPublishModule // PublishBookComponent is imported from this module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
