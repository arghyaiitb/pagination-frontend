import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {appRouting} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RecentlyPublishedComponent} from './recently-published/recently-published.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';

import {BookPublishModule} from './publish-book/publish-book.module';
import {environment} from '../environments/environment';
import {AF} from '../providers/angularfirebase';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecentlyPublishedComponent,
    PageNotFoundComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BookPublishModule // PublishBookComponent is imported from this module
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule {
}
